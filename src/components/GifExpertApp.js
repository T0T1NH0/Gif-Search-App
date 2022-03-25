import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Ousama Ranking']);

  return (
    <div>
      <h2>Gif Search</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
