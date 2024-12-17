

export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
}

export type FilterValue = 'All' | Priority;


export interface SubmitData {
  title: string;
  description: string;
  priority: Priority;
}

export interface TaskFormProps {
  initialTitle?: string;
  initialDescription?: string;
  initialPriority?: Priority;
  onSubmit: (data: { title: string; description: string; priority: Priority }) => void;
  onCancel?: () => void;
  reset?: boolean;
}

export interface TaskItemProps {
  task: Task;
}
