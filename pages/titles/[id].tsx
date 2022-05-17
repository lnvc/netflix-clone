import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';

import { IMovie } from '../../utils/types';
import search from '../api/search';
interface ITitle {
  movie: IMovie | null
}

export const getStaticPaths = async () => {
  const paths = await axios.get(`${process.env.NEXT_PUBLIC_API_LOCAL}/search`);
  return {
    paths: paths.data.movieIds,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      movie: null
    }
  }
};

const Title = ({ movie }: ITitle) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const reduxMovies = useSelector((state: any) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(movie);

  useEffect(() => {
    if (reduxMovies && reduxMovies.length) {
      const tempMovie = reduxMovies.find(item => item.id.toString() === id.toString());
      console.log('selected movie', id, reduxMovies);
      setSelectedMovie(tempMovie);
    } else {

    }
  }, [reduxMovies]);

  return (
    <>
      {
        selectedMovie ? (
          <div>
            {selectedMovie.title}
          </div>
        ) : null
      }
    </>
  );
}

export default Title;
