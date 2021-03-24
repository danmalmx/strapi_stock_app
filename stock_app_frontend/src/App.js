import React from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import StockEventsTable from './components/StockEventsTable'
import AddStockEvent from './components/AddStockEvent'
import AddProduct from  './components/AddProduct'
import Nav from  './components/Nav'

class App extends React.Component{
  state = {
    fetchedProducts: [],
    fetchedStockEvents: [],
  }

  async componentDidMount() {
    const productRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    });

    const stockEventRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    });

    const fetchedProducts = productRes.data;
    const fetchedStockEvents = stockEventRes.data;

    this.setState({fetchedProducts, fetchedStockEvents })

  }

  render() {
    const { fetchedProducts, fetchedStockEvents } = this.state;
    return (
      <div className="App">
        <Router>
        <Nav />
          <Switch>
            <Route exact path="/products">
              <AddProduct />
            </Route>
            <Route exact path="/stock/add">
              <AddStockEvent products={fetchedProducts} />
            </Route>
            <Route exact path="/stock">
            <StockEventsTable products={fetchedProducts} stockEvents={fetchedStockEvents} />
            </Route>
          </Switch>
        </Router>
      </div>
    );

  }
}

export default App;
