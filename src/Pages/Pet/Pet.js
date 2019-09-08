import React from 'react';
import PropTypes from 'prop-types';
import s from './Pet.module.css';

const Pet = ({
  name,
  age,
  breed,
  gender,
  color,
  image,
  description,
  goBack,
}) => {
  return (
    <li className={s.item}>
      <button type="button" onClick={goBack} className={s.btn}>
        Return
      </button>
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

Pet.defaultProps = {
  name: '',
  age: null,
  breed: '',
  gender: '',
  color: '',
  image: '',
  description: '',
};

Pet.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  breed: PropTypes.string,
  gender: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  goBack: PropTypes.func.isRequired,
};

export default Pet;
