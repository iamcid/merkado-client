import React from 'react';
import '../App.css';
import ProductsContainer from './ProductsContainer';
// import NavBar from './components/NavBar';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <ProductsContainer />
      </div>
    );
  }
}

export default App;