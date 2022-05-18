import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';

import styles from './[id].module.scss';

import { IMovie } from '../../utils/types';
import search from '../api/search';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
interface ITitle {
  movie: IMovie | null
}

interface IDimensions {
  width: number,
  height: number
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
  const [dimensions, setDimensions] = useState<IDimensions>({ width: 0, height: 0 });

  useEffect(() => console.log('selectedMovie', selectedMovie), [selectedMovie]);
  useEffect(() => {
    if (reduxMovies && reduxMovies.length) {
      const tempMovie = reduxMovies.find(item => item.id.toString() === id.toString());
      console.log('selected movie', id, reduxMovies);
      setSelectedMovie(tempMovie);
    } else {

    }
    setDimensions({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, [reduxMovies]);

  return (
    <Layout>
      {
        selectedMovie ? (
          <div>
            {selectedMovie.title}
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_IMAGE_HOST}${selectedMovie.poster_path}`}
                height={dimensions.height}
                width={dimensions.width}
                alt="movie"
              />
            </div>
          </div>
        ) : <Spinner />
      }
    </Layout>
  );
}

export default Title;
