import React from 'react'

class Pet extends React.Component {
  
  makeButtons = () => {
    let button;
    if(this.props.pet.isAdopted) {
      button = <button className="ui disabled button">Already Adopted</button>
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt Pet</button>
    }
    return button
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.makeButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
