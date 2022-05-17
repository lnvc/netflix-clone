import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';
import { IMovie } from '../../utils/types';
import Link from 'next/link';

interface ICard {
  movie: IMovie
}
const Card = ({ movie }: ICard) => {
  // useEffect(() => {
  //   console.log(movie);
  // });

  return (
    <Link href={`/titles/${movie.id.toString()}`}>
      <a>
        <div
          id={movie.id.toString()}
          key={movie.id}
          className={styles.container}
          onMouseOver={() => console.log('hover')}
        >
          {/* <h1>{movie.title}</h1> */}
          <Image
            src={`${process.env.NEXT_PUBLIC_API_IMAGE_HOST}${movie.poster_path}`}
            height={200}
            width={300}
            alt={movie.title}
          />
        </div>
      </a>
    </Link>
  );
};

export default Card;
