import { ReducerStateType, ReducerActionType, ActionType, TaskStatusType } from '../../types';
import makeid from '../../utils';

export default function reducer(state: ReducerStateType, action: ReducerActionType) {
  switch (action.type) {
    case ActionType.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    case ActionType.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          return item.id === action.payload.id ? { ...item, status: TaskStatusType.COMPLETED } : item;
        }),
      };
    case ActionType.UNCOMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          return item.id === action.payload.id ? { ...item, status: TaskStatusType.ACTIVE } : item;
        }),
      };
    case ActionType.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload.content,
            id: makeid(),
            status: TaskStatusType.ACTIVE,
          },
        ],
      };

    default:
      return state;
  }
}
