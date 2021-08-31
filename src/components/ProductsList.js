import React from 'react';
import { connect } from 'react-redux'

const ProductsList = ({ products }) => {
    return (
        <div>
            {products.map(product => 
                <ul key={product.id}>
                    <li >
                        {product.name} - {product.category} - {product.description} - {product.image_url} - {product.sell_or_trade}
                    </li>
                </ul>
        )}
        </div>
    );
};

const mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps)(ProductsList);