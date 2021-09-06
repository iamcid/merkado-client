import React from 'react';
import { connect } from 'react-redux';
import { selectedProduct } from '../actions/productsActions'

class ProductsShow extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(null, {selectedProduct})(ProductsShow);