import { fetchMovies } from 'api/movies';
import LoadingHoc from 'hoc/LoadingHoc';
import React, { useEffect, useState } from 'react';

const Review = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovies(`movie/${id}/reviews`).then(({ results }) => {
      setIsLoading(false);
      setReviews(results);
    });
  }, [id]);

  return (
    <div>
      <LoadingHoc loading={isLoading}>
        {reviews &&
          (!reviews.length ? (
            <h5>We don't have any reviews for this movie.</h5>
          ) : (
            reviews.map(e => {
              return (
                <div key={e.id}>
                  <h3>{e.author}</h3>
                  <p>{e.content}</p>
                </div>
              );
            })
          ))}
      </LoadingHoc>
    </div>
  );
};

export default Review;
