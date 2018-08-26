import React, { Component } from 'react';
import '../App.css';

export class DogYearsInfo extends Component {

constructor(props) {
  super(props);

    this.handleClick = this.handleClick.bind(this);
  
  }

  handleClick(event) {
    event.preventDefault();
    const info = this.props.info;
    this.props.onClick(info);
  }

  render() {
    return (
      <div>
    <p className="dogInfoLink">
    <a href="" onClick={ this.handleClick }> How is dog age calculated?</a>
    </p> 
   { this.props.info && 
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
