import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [State, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    getGifs(category).then(
      (gifs) => {
        setTimeout(() => {
          console.log(gifs);
          setState({
            data: gifs,
            loading: false,
          });
        }, 500);
      },
      [category]
    );
  });
  return State;
};
