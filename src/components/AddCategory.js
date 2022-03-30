import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [InputValue, setInputValue] = useState(String);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log('handleInputChange activated');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit done!');

    if (InputValue.trim().length > 2) {
      setCategories((c) => [InputValue, ...c]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{InputValue}</p>
      <input
        type='text'
        value={InputValue}
        onChange={handleInputChange}
        placeholder='Search Here!'
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
