import React, { Component } from 'react';
import '../App.css';

export class Bluey extends Component {

  render() {
    return (
      <div>
   { this.props.showBluey &&  
    <div>
    <h2>You're breaking records!</h2> 
    <p className="blueyText">Bluey, the world’s oldest known dog, lived to be 29. Born in 1910, the Australian Cattle dog herded sheep for nearly 20 years on his family’s farm before he died in 1939.</p>
    <p className="blueyLink"><a href="https://en.wikipedia.org/wiki/Bluey_(dog)" target="_blank" rel="noopener noreferrer">Learn More About Bluey</a></p>
    </div> 
   }
      </div>
    );
  }
}
