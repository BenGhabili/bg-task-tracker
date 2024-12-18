import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { Task } from '../components/TaskTracker/types/TaskTrackerTypes';

interface TaskContextValue {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  editTask: (id: string, updatedFields: Partial<Omit<Task, 'id'>>) => void;
  deleteTask: (id: string) => void;
  saveError: Error | null;
}

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState<Error | null>(null);

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      setError(new Error('Can not save to local storage'));
    }
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [tasks]);

  const addTask = (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskData,
    };

    setTasks(prev => [...prev, newTask]);
  };

  const editTask = (id: string, updatedFields: Partial<Omit<Task, 'id'>>) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, ...updatedFields } : task)
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, saveError: error }}>
      {children}
    </TaskContext.Provider>
  );
};
