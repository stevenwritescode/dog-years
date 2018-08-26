import React, { Component } from 'react';
import '../App.css';

export class DogYearsCalc extends Component {

constructor(props) {
  super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const age = event.target.value;
    this.props.onChange(age);
  }

  render() {
    const humanAge = this.props.humanAge;
    const dogAge = this.props.dogAge;
    return (
      <div>
      <h1>Calculate Age In Dog Years</h1>
        <p>
          <label htmlFor="age" className="humanAgeText">Age In Human Years:</label> <br /> 
          <input name="age" className="humanAge" type="number" placeholder="Enter Human Years" min="0" value={ humanAge } onChange={ this.handleChange } />
        </p>
        { this.props.dogAge != undefined &&  <h3 className="dogAgeText"> Age In Dog Years: 
      <strong className="dogAge"> { dogAge } </strong>
    </h3> 
   }
      </div>
    );
  }
}
