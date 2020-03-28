import React, { Component } from 'react';
import Counters from './component/counters'
import NavBar from './component/navbar'

import './App.css';
class App extends Component {
  state = {
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}

    ]
  };
  handleDelete=(countId)=>{
      const counters = this.state.counters.filter(c=>c.id!==countId);
      this.setState({counters:counters});
  };
  handleReset=()=>{
      const counters = this.state.counters.map(c=>{c.value=0;return c;});
      this.setState({counters:counters});
  };
  handleIncrement=(countId)=>{
      const counters = this.state.counters.map(c=>{if(c.id==countId){c.value=c.value+1};return c;});
      this.setState({counters:counters});
  }
  render() { 
    return (
      <React.Fragment >
        <NavBar ></NavBar>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset} 
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}  
        ></Counters>
      </React.Fragment>
    );
  }
  
};
 
export default App;

