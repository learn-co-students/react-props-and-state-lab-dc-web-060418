import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    const newType = event.target.value;
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    });
  };

  handleClick = event => {
    console.log(event);

    let url = "/api/pets";
    this.state.filters.type !== "all"
      ? fetch(url + `?type=${this.state.filters.type}`)
          .then(resp => resp.json())
          .then(data =>
            this.setState({
              pets: data
            })
          )
      : fetch(url)
          .then(resp => resp.json())
          .then(data =>
            this.setState({
              pets: data
            })
          );
  };

  onAdoptPet = id => {
    const newPetArr = [...this.state.pets];

    newPetArr.find(pet => pet.id === id).isAdopted = true;
    this.setState({
      pets: newPetArr
    });
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
              <Filters
                onChangeType={this.handleChange}
                onFindPetsClick={this.handleClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
