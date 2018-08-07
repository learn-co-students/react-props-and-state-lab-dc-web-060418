import React from 'react'

class Pet extends React.Component {
  render() {
   
    let{pet} = this.props;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
           Gender: {pet.gender === 'female' ? '♀' : '♂' }
            PET NAME: {pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {
          pet.isAdopted === false ? <button className="ui primary button" onClick={()=> this.props.onAdoptPet(pet.id)}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
