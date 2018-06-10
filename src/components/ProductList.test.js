import React              from 'react'
import ReactDOM           from 'react-dom'
import {ProductList}      from './ProductList'

it('<ProductList /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ProductList
      products={[
        {id: 1, price: '100 €', score: '3.2', name: 'Testing #1'},
        {id: 2, price: '140 €', score: '1.2', name: 'Testing #2'},
      ]}
    />, div)
  ReactDOM.unmountComponentAtNode(div)
})
