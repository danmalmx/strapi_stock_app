import React, { Component } from 'react'
import axios from 'axios'

class AddStockEvent extends Component {

  state = {
    qty: 0,
    type: 'add',
    product: 'no',
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log('AddStockEvent.handleChange event.target.name', event.target.name);
    console.log('AddStockEvent.handleChange event.target.value', event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {qty, type, product } = this.state;

    if (product !== 'no') {
      const data = {
        qty,
        type,
        product: parseInt(product)
      };

      const addStockRes = await axios({
        method: 'POST',
        url: `http://localhost:1337/stockevents`,
        data,
      });

      if (addStockRes.status === 200 ) {
        alert('Success');
        window.location = window.location;
      }

    } else {
      return alert('No product choosen')
    }
  };

  render(){

    const { qty, type, product } = this.state;

    const { products } = this.props;

    return (
      <div className="AddStockEvent">
        Add Stock Event
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} name="product" value={product}>
            <option value="no">Please select a product</option>
            {products.map((product, i) =>
              <option key={i} value={product.id}>
                {product.name}
              </option>
            )}
          </select>
          <input onChange={this.handleChange} type="number" name="qty" value={qty}/>
          <select onChange={this.handleChange} name="type" value={type}>
            <option value="add">Add</option>
            <option value="remove">Remove</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddStockEvent
