import React, { Component } from 'react';
import pets from '../../components/pets.json';
import Pet from '../Pet/Pet';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = {
    pet: {},
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    this.setState({
      pet: pets.find(pet => id === pet.id),
    });
  }

  render() {
    const { pet } = this.state;
    return (
      <>
        {pet && (
          <Pet
            name={pet.name}
            age={pet.age}
            breed={pet.breed}
            gendor={pet.gendor}
            color={pet.color}
            image={pet.image}
            description={pet.description}
          />
        )}
      </>
    );
  }
}
