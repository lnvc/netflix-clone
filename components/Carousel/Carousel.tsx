import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Carousel.module.scss';

import { increment, decrement } from '../../features/counter/counterSlice';
import Card from '../Card';
import Arrow from '../Arrow';
import { IMovie } from '../../utils/types';

const Carousel = ({ movies, title }) => {
  const reduxMovies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();
  console.log(movies);

  const [page, setPage] = useState<number>(0);
  const [sixMovies, setSixMovies] = useState<IMovie[]>(movies?.slice(page, page + 6));
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  useEffect(() => {
    setSixMovies(reduxMovies?.slice(page, page + 6));
  }, [reduxMovies]);

  const handlePreviousPage = () => {
    setPage(page - 1);
    const start = (page - 1) * 6;
    const displayMovies = reduxMovies?.slice(start, start + 6);
    setSixMovies(displayMovies);
    setIsLastPage(false);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    const start = (page + 1) * 6;
    const displayMovies = reduxMovies?.slice(start, start + 6);
    setSixMovies(displayMovies);
    if (displayMovies[displayMovies.length - 1] === reduxMovies[reduxMovies.length - 1]) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  };

  return (
    <>
      <h1>{title} {'>'}</h1>
      <div className={styles.container}>
        {
          page ?
          <div onClick={handlePreviousPage}>
            <Arrow direction='left' />
          </div> : null
        }
        {sixMovies?.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
        {
          !isLastPage &&
          <div onClick={handleNextPage}>
            <Arrow direction='right' />
          </div>
        }
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default Carousel;
