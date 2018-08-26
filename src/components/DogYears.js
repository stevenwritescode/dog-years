import React, { Component } from 'react';
import {Bluey} from "./Bluey"
import {DogYearsInfo} from "./DogYearsInfo"
import {DogYearsCalc} from "./DogYearsCalc"
import '../App.css';

export class DogYears extends Component {

constructor(props) {
  super(props);
  this.state= { humanAge: undefined, dogAge: undefined, info: false, bluey:false };
  this.calculateDogYears = this.calculateDogYears.bind(this);
  this.displayInfo = this.displayInfo.bind(this);
  }

  calculateDogYears(age) {
   if (age < 1 ) { this.setState({dogAge: undefined}); 
   } else if (Number(age) === 1 ) { this.setState({dogAge: 15}); 
   } else if (Number(age) === 2) { this.setState({dogAge: 24});
   } else if (Number(age) >= 3) { this.setState({dogAge: 24 + (5 * (age-2))});
   }

  if (age > 29) { this.setState({ bluey: true }) } else { this.setState({ bluey: false }) }
  
  }

  displayInfo(info){
    if (info === false) {this.setState({info: true})}
    else if (info === true) {this.setState({info: false})};
    return this.state.info;
  }

  render() {
    return (
      <div className="container">
   <DogYearsCalc onChange={this.calculateDogYears} dogAge={this.state.dogAge} humanAge={this.state.humanAge} />
   <Bluey showBluey={this.state.bluey}/>
   <DogYearsInfo onClick={this.displayInfo} info={this.state.info}/>
      </div>
    );
  }
}
