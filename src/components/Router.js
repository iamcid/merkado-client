import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../components/Home';
import ProductsContainer from './ProductsContainer';
import ProductsForm from './ProductsForm';
import ProductsShow from './ProductsShow';

class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={ProductsContainer} />
                <Route exact path="/products/new" component={ProductsForm} />
                <Route exact path="/products/:id" component={ProductsShow} />
                />
            </Switch>
        );
    }
};

const mapStateToProps = ({ products }) => ({products})

export default connect (mapStateToProps)(Router);