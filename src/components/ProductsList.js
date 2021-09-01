import React from 'react';
import { connect } from 'react-redux';

import CommentsContainer from './CommentsContainer';

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
        {/* <CommentsContainer productId={prod.id}/> */}
        </div>
    );
};

const mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps)(ProductsList);