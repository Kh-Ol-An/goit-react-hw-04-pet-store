import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../components/pets.json';
import Pet from '../Pet/Pet';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
  };

  state = {
    pet: {},
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    this.setState({
      pet: pets.find(pet => id === pet.id),
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

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
            goBack={this.handleGoBack}
          />
        )}
      </>
    );
  }
}
