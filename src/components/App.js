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

  onAdoptPet = (petId) =>{
   const newPets = this.state.pets;
    for(const pet of newPets){
      if(pet.id === petId){
        console.log(pet.isAdopted)
        pet.isAdopted = pet.isAdopted === true ?  false : true
        console.log(pet.isAdopted)
      }
    }
   
    this.setState({
      pets: newPets
    })
    
  }
  

  onChangeType(filterType){
    this.setState({
      filters: {
        type: filterType,
      }
    })
  }


  onFindPetsClick= () => {
  
    let extension;
    switch(this.state.filters.type){
      case 'all':
      extension = '';
      break;
      case 'cat':
      extension = '?type=cat';
      break;
      case 'dog':
      extension = '?type=dog';
      break;
      case 'micropig':
      extension = '?type=micropig';
      break;
    }

    fetch(`/api/pets`+ extension)
    .then(response => response.json())
    .then(results=>{
      this.setState({
      pets: results
    })
  });
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
              <Filters onChangeType={this.onChangeType.bind(this)}  onFindPetsClick={this.onFindPetsClick.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
