import React, { Component } from 'react';
import Nav from './component/Nav/Nav';
import routes from './routes';
import './App.css';


class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      location: '/'
    }
  }

 

  render() 
  {
    //let displayNav = this.props.location.pathname === '/' ? "" : <Nav/>
   

    return (
      <div className="App">
          <Nav />
          {routes}
      </div>
    );
  }
}

export default App;
