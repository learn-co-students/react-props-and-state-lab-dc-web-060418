import React from "react";
import Pet from "./Pet";

// Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.

class PetBrowser extends React.Component {
  renderPets() {
    return this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />;
    });
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>;
  }
}

export default PetBrowser;
