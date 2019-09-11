import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pets from '../../components/pets.json';
import s from './PetsPage.module.css';

const Pets = ({ match }) => (
  <ul className={s.nav}>
    {pets.map(pet => (
      <Link key={pet.id} to={`${match.path}/${pet.id}`} className={s.link}>
        <div className={s.box}>
          <img src={pet.image} alt={pet.name} width="320" />
          <h3>{pet.name}</h3>
        </div>
      </Link>
    ))}
  </ul>
);

Pets.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Pets;
