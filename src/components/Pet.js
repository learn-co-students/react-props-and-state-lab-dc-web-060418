import React from "react";

class Pet extends React.Component {
  renderButton = () => {
    return this.props.pet.isAdopted ? (
      <button className="ui disabled button">Already adopted</button>
    ) : (
      <button
        id={this.props.index}
        className="ui primary button"
        onClick={() => this.props.onAdoptPet(this.props.pet.id)}
      >
        Adopt pet
      </button>
    );
  };

  render() {
    // let { id, name, gender, type, age, weight } = this.props.currentPet;
    let pet = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.name}
            {pet.gender === "male" ? "♂" : "♀"}
          </a>
          <div className="meta">
            <span className="date" />
          </div>
          <div className="description">
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">{this.renderButton()}</div>
      </div>
    );
  }
}

export default Pet;
