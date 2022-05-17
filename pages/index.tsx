import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import styles from '../styles/Home.module.css';

import { addMovies } from '../features/movies/moviesSlice';

import Layout from '../components/Layout';
import Card from '../components/Card';
import { getSortedPostsData } from '../utils/posts';
import Carousel from '../components/Carousel';
import { IMovie } from '../utils/types';

function Home({ data }) {
  // const reduxMovies = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState<IMovie[]>(data);

  useEffect(() => {
    dispatch(addMovies(movies));
  }, []);

  return (
    <Layout>
      <Carousel movies={movies} title="Popular on Netflix" />
    </Layout>
  );
}

export async function getStaticProps() {
  // try {
  //   const res = await axios.get(`https://${process.env.NEXT_PUBLIC_API_HOST}/search/movie`, {
  //     params: {
  //       api_key: process.env.NEXT_PUBLIC_API_KEY,
  //       query: 'a'
  //     }
  //   });
  //   const data = res.data.results;
  //   return {
  //     props: {
  //       data
  //     }
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  const data = await axios.get(`${process.env.NEXT_PUBLIC_API_LOCAL}/search`);
  return {
    props: {
      data: data.data.data,
    },
  };
}

export default Home;
