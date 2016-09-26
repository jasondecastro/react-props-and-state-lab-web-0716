import React from 'react'

class Pet extends React.Component {
  constructor() {
    super();

    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet(e) {
    
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    var { pet, isAdopted } = this.props
    var { type, weight, age, gender, name } = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;

