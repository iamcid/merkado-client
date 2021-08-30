import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions/productsActions';

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                Products Container
            </div>
        )
    }
}

export default connect(null, { fetchProducts })(ProductsContainer);