import React from 'react'
import './App.css';
import axios from 'axios';
import StockEventsTable from './components/StockEventsTable'

const fetchedProducts = [
  {id: 1, name: 'The very best product', thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2F20190530%2Fourmid%2Fpngtree-black-box-pattern-image_1257419.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fblack-box&tbnid=q5fL5PXhu9EvQM&vet=12ahUKEwjght2s0LfvAhXDk6QKHfD4CooQMygAegUIARCWAQ..i&docid=pM7PZylmRCkH5M&w=360&h=360&q=black%20box%20png&ved=2ahUKEwjght2s0LfvAhXDk6QKHfD4CooQMygAegUIARCWAQ'},
  {id: 2, name: 'The not so good', thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2F20190530%2Fourmid%2Fpngtree-black-box-pattern-image_1257419.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fblack-box&tbnid=q5fL5PXhu9EvQM&vet=12ahUKEwjght2s0LfvAhXDk6QKHfD4CooQMygAegUIARCWAQ..i&docid=pM7PZylmRCkH5M&w=360&h=360&q=black%20box%20png&ved=2ahUKEwjght2s0LfvAhXDk6QKHfD4CooQMygAegUIARCWAQ'}
]

const fetchedStockEvents = [
  {id: 1, type: 'add', qty: 100, product: fetchedProducts[0]},
  {id: 2, type: 'remove', qty: -20, product: fetchedProducts[0]},
  {id: 3, type: 'remove', qty: -10, product: fetchedProducts[0]},
  {id: 4, type: 'add', qty: 50, product: fetchedProducts[0]},
  {id: 5, type: 'add', qty: 120, product: fetchedProducts[1]},
  {id: 6, type: 'remove', qty: -50, product: fetchedProducts[1]},
  {id: 7, type: 'remove', qty: -60, product: fetchedProducts[1]},
  {id: 8, type: 'add', qty: 50, product: fetchedProducts[1]},
]

class App extends React.Component{
  state = {
    fetchedProducts,
    fetchedStockEvents,
  }

  async componentDidMount() {
    const producRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    });

    const stockEventRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    });

    const fetchedProducts = producRes.data;
    const fetchedStockEvents = stockEventRes.data;

    this.setState({fetchedProducts, fetchedStockEvents })

  }

  render() {
    const { fetchedProducts, fetchedStockEvents } = this.state;
    return (
      <div className="App">
        <h1>The Stock App</h1>
        < StockEventsTable
          products={fetchedProducts}
          stockEvents={fetchedStockEvents}
        />
      </div>
    );

  }
}

export default App;
