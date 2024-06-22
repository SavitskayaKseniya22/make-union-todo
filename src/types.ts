export interface UserType {
  id: string;
  email: string;
  name: string;
  tel: string;
  bio: string;
}

export const isUser = (data: any): data is UserType => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.email === 'string' &&
    typeof data.name === 'string' &&
    typeof data.tel === 'string' &&
    typeof data.bio === 'string'
  );
};

export const isUserResult = (data: any): data is UserType[] => {
  return data && (data.length === 0 || (data.length > 0 && isUser(data[0])));
};

export enum TaskStatusType {
  'ACTIVE' = 'active',
  'COMPLETED' = 'completed',
}

export type TaskType = {
  content: string;
  id: string;
  status: TaskStatusType;
};

export type TaskListType = TaskType[];

export type ReducerActionType =
  | {
      type: ActionType.COMPLETE_TASK | ActionType.REMOVE_TASK | ActionType.UNCOMPLETE_TASK;
      payload: { id: string };
    }
  | {
      type: ActionType.ADD_TASK;
      payload: { content: string };
    };

export type ReducerStateType = { tasks: TaskListType };

export enum ActionType {
  'COMPLETE_TASK' = 'complete-task',
  'REMOVE_TASK' = 'remove-task',
  'UNCOMPLETE_TASK' = 'uncomplete-task',
  'ADD_TASK' = 'add-task',
}
