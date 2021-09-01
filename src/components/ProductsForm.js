import React from 'react';
import { connect } from 'react-redux';

import { addProduct } from '../actions/productsActions'

class ProductsForm extends React.Component {

    state = {
        name: '',
        category: '',
        description: '',
        image_url: '',
        sell_or_trade:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addProduct(this.state)
        this.setState({
            name: '',
            category: '',
            description: '',
            image_url: '',
            sell_or_trade: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="text-center"><h1>Add a Product:</h1></div>                
                <br/>
                <label className="name">Name:</label>
                <input id="name" type='text' value={this.state.name} onChange={this.handleChange} name="name"/> 
                <br/>
                <label>Category:</label>
                <input type='text' value={this.state.category} onChange={this.handleChange} name="category"/> 
                <br/>
                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name="description"/> 
                <br/>
                <label>Image URL:</label>
                <input type='text' value={this.state.image_url} onChange={this.handleChange} name="image_url"/> 
                <br/>
                <label>Sell Or Trade:</label>
                <input type='text' value={this.state.sell_or_trade} onChange={this.handleChange} name="sell_or_trade"/> 
                <br/><br/>
                <button style={{backgroundColor: 'black', color: 'white'}} >Create Product</button>

            </form>
        );
    }
}

export default connect(null, { addProduct })(ProductsForm);