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

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if(this.state.filters.type !== "all"){
      url += `?type=${this.state.filters.type}`
    }
    fetch(url).then(r => r.json()).then(pets => this.setState({pets: pets}))
  }

  onAdoptPet = (id) => {
    console.log("adopting pet", id)
    const newPetArr = [...this.state.pets]
    
    newPetArr.find(pet => pet.id === id).isAdopted = true
    this.setState({
      pets: newPetArr
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
