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

  onChangeType = (newFilter) => {
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  onFindPetsClick = (event) => {
    let url = `/api/pets`

    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    
    .then(response => response.json())
    .then(petObjs => {
      console.log(petObjs)
      this.setState({
        pets: petObjs
      })
    })
  } 

  onAdoptPet = (id) => {
    console.log(id)

    const newPetsArray = [...this.state.pets].map( (element) => {
      if(element.id === id) {
        element.isAdopted = true
      }
      return element
    })

    console.log(newPetsArray)

    this.setState({
      ...this.state.pets,
      pets: newPetsArray
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
