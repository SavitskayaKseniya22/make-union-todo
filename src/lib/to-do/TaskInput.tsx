import { FormEvent } from 'react';

export default function TaskInput({ onSumbit }: { onSumbit: (value: string) => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const textValue = formData.get('text');
    if (textValue) {
      onSumbit(textValue as string);
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tasks__form">
      <input type="text" placeholder="What are we going to do today?" name="text" required className="tasks__input" />
    </form>
  );
}
