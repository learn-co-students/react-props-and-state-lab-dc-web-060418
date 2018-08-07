import React from 'react'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={(event)=> {
            console.log(event.target.value);
            const result = event.target.value;
            this.props.onChangeType(result)}}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={(event)=> this.props.onFindPetsClick(event)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
