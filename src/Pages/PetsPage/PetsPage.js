import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../components/pets.json';
import s from './PetsPage.module.css';

const Pets = () => {
  return (
    <>
      <ul className={s.nav}>
        {pets.map(pet => (
          <Link key={pet.id} to={`/pets/${pet.id}`} className={s.link}>
            <div className={s.box}>
              <img src={pet.image} alt={pet.name} width="320" />
              <h3>{pet.name}</h3>
            </div>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Pets;
