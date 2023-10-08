import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BackButton = () => {
  const history = useNavigate();
  const from = localStorage.getItem('from');

  return <Button onClick={() => history(from)}>&#x2190; Go back</Button>;
};

export default BackButton;
