import React from 'react'

class Pet extends React.Component {

  renderButtons = () => {
    let button;
    if (this.props.pet.isAdopted) {
      button = <button className="ui disabled button" >Already adopted</button>
    } else {
      button = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>
    }
    return button
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date"></span>
          </div>
          <div className="description">
            <p>Type: {this.props.pet.type}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
