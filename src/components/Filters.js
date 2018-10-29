import React from 'react'

class Filters extends React.Component {
  handleChange(event) {
    this.props.onChangeType(event.target.value);
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.handleChange(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={() => this.props.onFindPetsClick()} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

Filters.defaultProps = {
  onChangeType: function() {},
  onFindPetsClick: function() {}
};

export default Filters
