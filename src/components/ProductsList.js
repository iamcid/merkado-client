import React from 'react';
import { connect } from 'react-redux';
import { selectedProduct } from '../actions/productsActions';
import { Link } from 'react-router-dom';


const ProductsList = ( props ) => {
    const listProducts = props.products.map((product) => {
        return (
        <div key={product.id} className="productList">
            <Link to={`/products/${product.id}`}>{product.name}</Link>        
        </div>)
    })

    return (
        <div>
          <ul>{listProducts}</ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { products: state.products }
}

const mapDispatchToProps = {
    selectedProduct: selectedProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);