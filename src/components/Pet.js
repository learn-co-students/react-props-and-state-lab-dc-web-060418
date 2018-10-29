import React from 'react'

class Pet extends React.Component {
  getButton = () => {
    if (this.props.pet.isAdopted)
      return <button className="ui disabled button">Already adopted</button>;
    else
      return <button className="ui primary button" onClick={event => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>;
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {this.props.pet.name}
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
          {this.getButton()}
        </div>
      </div>
    )
  }
}

Pet.defaultProps = {
  pet: {
    name: "",
    type: "",
    gender: "",
    age: 0,
    weight: 0
  },
  isAdopted: true,
  onAdoptPet: function(id) {}
};

export default Pet
