import { useState } from 'react';

import styles from './Carousel.module.scss';

import Card from '../Card';
import Arrow from '../Arrow';
import { IMovie } from '../../utils/types';

const Carousel = ({ movies, title }) => {
  const [page, setPage] = useState<number>(0);
  const [sixMovies, setSixMovies] = useState<IMovie[]>(movies?.slice(page, 6));

  const handleNextPage = () => {
    setPage(page + 1);
    setSixMovies(movies?.slice(page + 7, page + 13));
  };

  return (
    <>
      <h1>{title} {'>'}</h1>
      <div className={styles.container}>
        {sixMovies?.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
        <div onClick={handleNextPage}>
          <Arrow direction='right' />
        </div>
      </div>
    </>
  );
};

export default Carousel;
