import React from 'react'
import './App.css'
import axios from 'axios'
import StockEventsTable from './components/StockEventsTable'
import AddStockEvent from './components/AddStockEvent'
import AddProduct from  './components/AddProduct'
class App extends React.Component{
  state = {
    fetchedProducts: [],
    fetchedStockEvents: [],
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
        <AddProduct />
        <AddStockEvent products={fetchedProducts} />
        <StockEventsTable products={fetchedProducts} stockEvents={fetchedStockEvents} />
      </div>
    );

  }
}

export default App;
