import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  makePets = (pets) => {
    return pets.map(pet => {
      return <Pet
        onAdoptPet={this.props.onAdoptPet}
        pet={pet}
        key={pet.id}
        />
    })
  }
  
  render() {
    return <div className="ui cards">{this.makePets(this.props.pets)}</div>
  }
}

export default PetBrowser
