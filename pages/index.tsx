import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';

import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';
import Card from '../components/Card';
import { getSortedPostsData } from '../utils/posts'
import search from './api/search';
import Carousel from '../components/Carousel';
import { IMovie } from '../utils/types';

const Home = ({ data }) => {
  const [movies, setMovies] = useState<IMovie[]>(data);
  return (
    <Layout>
      <Carousel movies={movies} title="Popular on Netflix" />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios.get(`https://${process.env.NEXT_PUBLIC_API_HOST}/search/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        query: 'a'
      }
    });
    const data = res.data.results;
    return {
      props: {
        data
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export default Home;
