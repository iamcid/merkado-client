import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import ProductsContainer from './ProductsContainer';
import ProductsForm from './ProductsForm'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsContainer} />
            <Route exact path="/products/new" component={ProductsForm} />
        </Switch>
    );
};

export default Router;