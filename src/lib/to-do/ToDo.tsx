import { useReducer } from 'react';
import { ActionType, TaskStatusType } from '../../types';
import { initialTasks } from './initialData';
import reducer from './reducer';
import TaskInput from './TaskInput';
import Task from './Task';

export default function ToDo() {
  const [state, dispatch] = useReducer(reducer, {
    tasks: initialTasks,
  });

  return (
    <div className="container container_todo">
      <TaskInput
        onSumbit={(value) => {
          dispatch({
            type: ActionType.ADD_TASK,
            payload: { content: value },
          });
        }}
      />

      <ul className="tasks__content">
        {state.tasks.map((task) => {
          return (
            <Task
              data={task}
              key={task.id}
              onChangeTask={({ id, status }: { id: string; status: TaskStatusType }) => {
                if (status === TaskStatusType.COMPLETED) {
                  dispatch({
                    type: ActionType.UNCOMPLETE_TASK,
                    payload: { id },
                  });
                } else {
                  dispatch({
                    type: ActionType.COMPLETE_TASK,
                    payload: { id },
                  });
                }
              }}
              onDeleteTask={({ id }: { id: string }) => {
                dispatch({ type: ActionType.REMOVE_TASK, payload: { id } });
              }}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
}
