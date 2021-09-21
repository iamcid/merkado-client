import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import ProductsList from '../components/ProductsList';

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <h1>Products:</h1>
                <ProductsList />
            </div>
        )
    }
}

export default connect(null, { fetchProducts })(ProductsContainer);
