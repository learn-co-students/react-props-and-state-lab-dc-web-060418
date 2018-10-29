import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchUrl() {
    if (this.state.filters.type === 'all')
      return '/api/pets'
    else
      return `/api/pets?type=${this.state.filters.type}`
  }

  handleChangeType = type => {
    this.setState({
      filters: Object.assign(this.state.filters, {type: type})
    });
  };

  handleFindPetsClick = () => {
    fetch(this.fetchUrl())
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
  };

  handleAdoptPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id);
    pet.isAdopted = true;
    this.setState({pets: this.state.pets});
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
