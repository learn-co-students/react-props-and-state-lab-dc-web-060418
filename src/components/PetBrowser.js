import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  genPets = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={pet.isAdopted}/>);
  };

  render() {
    return <div className="ui cards">{this.genPets()}</div>
  }
}

PetBrowser.defaultProps = {
  pets: [],
  onAdoptPet: function() {}
};

export default PetBrowser
