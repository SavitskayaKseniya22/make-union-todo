import { useState, ChangeEvent, FormEvent } from 'react';

export default function TaskInput({ onSumbit }: { onSumbit: (value: string) => void }) {
  const [textValue, setTextValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSumbit(textValue);
    setTextValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="tasks__form">
      <input
        type="text"
        placeholder="What are we going to do today?"
        name="text"
        onChange={handleChange}
        value={textValue}
        required
        className="tasks__input"
      />
    </form>
  );
}
