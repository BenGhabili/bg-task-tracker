import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../types';

interface TaskContextValue {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
}

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskData,
    };

    setTasks(prev => [...prev, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
