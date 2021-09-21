import React from 'react';
import '../App.css';
import Router from './Router';
import NavBar from './NavBar';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />        
      </div>
    );
  }
}

export default App;