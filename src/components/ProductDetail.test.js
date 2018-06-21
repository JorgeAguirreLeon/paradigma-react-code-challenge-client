import React              from 'react'
import ReactDOM           from 'react-dom'
import {ProductDetail}    from './ProductDetail'

test('<ProductDetail /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ProductDetail
      product={{
        id:'1',
        name:'Dummy Phone #1',
        description:'Lorem ipsum dolor sit amet.',
        tags:['dummy','phone','wow'],
        image:'https://images-na.ssl-images-amazon.com/images/I/41exDZBI2KL.jpg',
        price:'100 €',
        color:'black',
        system:'iCarrot',
        score:'3.6'
      }}
    />, div)
  ReactDOM.unmountComponentAtNode(div)
})
