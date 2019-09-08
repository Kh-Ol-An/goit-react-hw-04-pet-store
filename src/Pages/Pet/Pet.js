import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Pet.module.css';

const Pet = ({ name, age, breed, gender, color, image, description }) => {
  return (
    <li className={s.item}>
      <Link to="/pets">
        <button type="button" className={s.btn}>
          Return
        </button>
      </Link>
      <h2>All about {name}</h2>
      <div className={s.box}>
        <img src={image} alt={name} width="320" />
        <div className={s.param}>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Color: {color}</p>
          <p>Breed: {breed}</p>
        </div>
      </div>
      <p>{description}</p>
    </li>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Pet;
