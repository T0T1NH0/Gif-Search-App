import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p className='loading animate__heartBeat'>Loading...</p>}
      <div className='card-grid'>
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
