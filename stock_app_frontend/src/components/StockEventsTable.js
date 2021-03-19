import React from 'react'
import StockDetail from './StockDetail'

const StockEventsTable = (props) => {
  const { products, stockEvents } = props;
  return (
    <div className="StockEventsTable">
      {products.map(product => {
        const { id } = product;

        const relevantStockEvent = stockEvents.filter(se => se.product.id === id);

        const stockTotal = relevantStockEvent.reduce((acc, el) => {
          return acc + el.qty;
        }, 0)

        return (
          <div className="StockEventsTable__ProductsContainer">
            <StockDetail
              name={product.name}
              total={stockTotal}
              stockEvents={relevantStockEvent}
            />
          </div>
        )
      })}
</div>
  )
}

export default StockEventsTable
