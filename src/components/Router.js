import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ProductsContainer from '../containers/ProductsContainer';
import ProductsForm from './ProductsForm';

class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/products" component={ProductsContainer} />
                <Route exact path="/products/new" component={ProductsForm} />
            </Switch>
        );
    }
};

export default Router;