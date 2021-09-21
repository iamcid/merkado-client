// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


// const ProductsList = ({products}) => {
//     return (
//         <div>
//             {products.map( product => 
//                 <li key={product.id}>
//                     <Link to={`/products/${product.id}`}>{product.name}</Link>
//                 </li> )}
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return { products: state.products }
// }
// export default connect(mapStateToProps)(ProductsList);

import React from 'react';
import { connect } from 'react-redux';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';

const ProductsList = ({ products }) => {
        return (
            <div>
                {products && products.map(product => 
                <ul>
                    <div key={product.id}>
                        <blockquote> 
                        <u><h2>{product.name}</h2></u>
                        <u><b>Category:</b></u> {product.category}<br/>
                        <u><b>Description:</b></u> {product.description}<br/>
                        <u><b>Image:</b></u> <img src={product.image_url} alt={product.name} width="200" height="150" /><br/>
                        <u><b>Sell or Trade:</b></u> {product.sell_or_trade}<br/>
                        <CommentsForm productId={product.id} />
                        <CommentsList productId={product.id} />
                        </blockquote>
                    </div>
                </ul>)}
            </div>
        )
    }

const mapStateToProps = state => {
    return { products: state.products}
}

export default connect(mapStateToProps)(ProductsList);
