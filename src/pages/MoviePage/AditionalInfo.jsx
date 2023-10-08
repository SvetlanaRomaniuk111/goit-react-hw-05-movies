import { NavLink, useParams } from 'react-router-dom';

const AditionalInfo = () => {
  const { id } = useParams();
  const from = localStorage.getItem('from');

  return (
    <div>
      <h4 className="mt-4">Aditional Information</h4>
      <ul>
        <li>
          <NavLink to={`/movies/${id}/cast`} state={{ from: from }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${id}/reviews`} state={{ from: from }}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AditionalInfo;
