import { useNavigate } from 'react-router-dom';

export default function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        navigate('/');
      }}
    >
      Return to main page
    </button>
  );
}
