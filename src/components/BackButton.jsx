import { useNavigate } from 'react-router-dom';
const BackButton = () => {
  const history = useNavigate();
  const from = localStorage.getItem('from');

  return (
    <button className="btn btn-secondary m-3" onClick={() => history(from)}>
      &#x2190; Go back
    </button>
  );
};

export default BackButton;
