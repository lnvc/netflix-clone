import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './Card.module.scss';
import { IMovie } from '../../utils/types';

interface ICard {
  movie: IMovie
}
const Card = ({ movie }: ICard) => {
  // useEffect(() => {
  //   console.log(movie);
  // });

  return (
    <div
      id={movie.id.toString()}
      key={movie.id}
      onMouseOver={() => console.log('hover')}
      className={styles.container}
    >
      {/* <h1>{movie.title}</h1> */}
      <Image
        src={`${process.env.NEXT_PUBLIC_API_IMAGE_HOST}${movie.poster_path}`}
        height={200}
        width={300}
        alt={movie.title}
      />
    </div>
  );
};

export default Card;
