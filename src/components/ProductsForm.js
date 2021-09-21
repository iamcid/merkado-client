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

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: [e.target.value]
    //     })
    // }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
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
                <input type='text' placeholder='Name' value={this.state.name} onChange={this.handleChange} name="name"/> 
                <br/>
                <input type='text' placeholder='Category' value={this.state.category} onChange={this.handleChange} name="category"/> 
                <br/>
                <input type='text' placeholder='Description' value={this.state.description} onChange={this.handleChange} name="description"/> 
                <br/>
                <input type='text' placeholder='Image URL' value={this.state.image_url} onChange={this.handleChange} name="image_url"/> 
                <br/>
                <input type='text' placeholder='Sell or Trade' value={this.state.sell_or_trade} onChange={this.handleChange} name="sell_or_trade"/> 
                <br/><br/>
                <input type="submit" value="Add product" />

            </form>
        );
    }
}

export default connect(null, { addProduct })(ProductsForm);