import LoadingHoc from 'hoc/LoadingHoc';
import css from './style.module.css';

const { fetchMovies } = require('api/movies');
const { useState } = require('react');
const { useEffect } = require('react');

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchMovies(`movie/${id}/credits`).then(({ cast }) => {
      setIsLoading(false);
      setCast(cast);
    });
  }, [id]);
  return (
    <div>
      <LoadingHoc loading={isLoading}>
        {cast.map(e => {
          return (
            <div key={e.id} className="mb-4">
              <div>
                <img
                  className={css.cast}
                  src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
                  alt={e.name}
                />
              </div>
              <span className="p-2">● {e.name}</span>
              <span className="p-2">Character: {e.character}</span>
            </div>
          );
        })}
      </LoadingHoc>
    </div>
  );
};

export default Cast;
