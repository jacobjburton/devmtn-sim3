import React, { Component } from 'react';
import Nav from './component/Nav/Nav';
import routes from './routes';
import './App.css';
import { withRouter } from 'react-router'

class App extends Component 
{
   

  render() 
  {
    let displayNav = this.props.location.pathname === '/' ? "" : <Nav />;
   
    //console.log(this.props.location)
    return (
      <div className="App">
          {displayNav}
          {routes}
      </div>
    );
  }
}

export default withRouter(App);
