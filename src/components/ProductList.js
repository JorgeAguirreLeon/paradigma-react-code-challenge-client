import React, { Component }                 from 'react'
import {connect}                            from 'react-redux'
import './ProductList.css'

export class ProductList extends Component {

  render() {

    return (
      <div className='ProductList'>
        {this.props.products.map(product=> (
          <div className='ProductList-item' key={product.id}>
            <a className='ProductList-item-link' href={`/${product.id}`}>
              <h2 className='ProductList-item-title'>{product.name}</h2>
              <img className='ProductList-item-image' src={product.image} alt={product.name} />
              <div className='ProductList-item-details'>
                <div className='ProductList-item-details-price'>{product.price}</div>
                <div className='ProductList-item-details-score'>{product.score} &#9733;</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {

  const {products} = state

  return {
    products
  }
}

export default connect(mapStateToProps)(ProductList)
