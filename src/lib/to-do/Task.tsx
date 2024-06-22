import { TaskType, TaskStatusType } from '../../types';
import { TrashIcon, CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';

export default function Task({
  data,
  onChangeTask,
  onDeleteTask,
}: {
  data: TaskType;
  onChangeTask: ({ id, status }: { id: string; status: TaskStatusType }) => void;
  onDeleteTask: ({ id }: { id: string }) => void;
}) {
  const { content, status, id } = data;

  return (
    <li data-status={status} className={`task${status === TaskStatusType.COMPLETED ? ' task_completed' : ''}`}>
      <div className="task__content">{content}</div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          onChangeTask({ id, status });
        }}
      >
        {status === TaskStatusType.COMPLETED ? <MinusCircleIcon /> : <CheckCircleIcon />}
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => {
          onDeleteTask({ id });
        }}
      >
        <TrashIcon />
      </button>
    </li>
  );
}
