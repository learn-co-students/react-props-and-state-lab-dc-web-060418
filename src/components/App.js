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

  changeStateType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  queryToPets = () => {
    if (this.state.filters.type === 'all') {
      fetch(`/api/pets`)
        .then(resp => resp.json())
        .then(list => {
          this.setState({
            pets: list
          })
        })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(list => {
          this.setState({
            pets: list
          })
        })
    }
  }

  changePetsArray = (pet, id) => {
    let pets = this.state.pets
    pets[id] = pet
    return pets
  }

  onAdoptPet = (id) => {
    let findPet = this.state.pets.find(pet => {
      return pet.id === id
    })
    let index = (this.state.pets.indexOf(findPet))
    findPet.isAdopted = true
    let updatedPets = this.changePetsArray(findPet, index)
    this.setState({
      pets: updatedPets
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
              <Filters onChangeType={this.changeStateType} onFindPetsClick={this.queryToPets}/>
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
