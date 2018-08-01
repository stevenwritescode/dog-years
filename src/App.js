import React, { Component } from 'react';
import './App.css';

class DogYears extends Component {

constructor(props) {
  super(props);
  this.state= { humanage: undefined, dogage: undefined, bluey:false, info:false };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  
  }

  calculateDogYears(age) {
   if (age < 1 ) { this.setState({dogage: undefined}); 
   } else if (Number(age) === 1 ) { this.setState({dogage: 15}); 
   } else if (Number(age) === 2) { this.setState({dogage: 24});
   } else if (Number(age) >= 3) { this.setState({dogage: 24 + (5 * (age-2))});
   }

  if (age > 29) { this.setState({ bluey: true }) } else { this.setState({ bluey: false }) }
  
  }

  displayInfo(info){
    if (info === false) {this.setState({info: true})}
    else if (info === true) {this.setState({info: false})}
  }

  handleChange(event) {
    this.calculateDogYears(event.target.value);
  }
  handleClick(event) {
    event.preventDefault();
    this.displayInfo(this.state.info)
  }


  render() {
    return (
      <div className="container">
        <h1>Calculate Age In Dog Years</h1>
        <p>
          <label htmlFor="age" className="humanAgeText">Age In Human Years:</label> <br /> 
          <input name="age" className="humanAge" type="number" placeholder="Human Years" min="0" value={ this.state.humanage } onChange={ this.handleChange } />
        </p>
        { this.state.dogage &&  <h3 className="dogAgeText"> Age In Dog Years: 
      <strong className="dogAge"> { this.state.dogage } </strong>
    </h3> 
   }
   { this.state.bluey &&  
    <div>
    <h2>You're breaking records!</h2> 
    <p className="blueyText">Bluey, the world’s oldest known dog, lived to be 29. Born in 1910, the Australian Cattle dog herded sheep for nearly 20 years on his family’s farm before he died in 1939.</p>
    <p className="blueyLink"><a href="https://en.wikipedia.org/wiki/Bluey_(dog)" target="_blank" rel="noopener noreferrer">Learn More About Bluey</a></p>
    </div> 
   }

       
    <p className="dogInfoLink">
    <a href="" onClick={ this.handleClick }> How is dog age calculated?</a>
    </p> 
   { this.state.info && 
    <p className="dogInfo">
    Contrary to popular belief, dogs do not age at a rate of 7 human years for each year in dog years.<br/>
    15 human years equals the first year of a medium-sized dog’s life.<br/>
    Year two for a dog equals about nine years for a human.<br/>
    And after that, each human year would be approximately five years for a dog.<br/>
    </p> }

      </div>
    );
  }
}

export default DogYears;
