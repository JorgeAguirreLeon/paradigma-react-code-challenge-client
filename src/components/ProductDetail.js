import React, { Component }                 from 'react'
import {connect}                            from 'react-redux'
import './ProductDetail.css'

export class ProductDetail extends Component {

  error_render = ()=> (
    <div>Error</div>
  )

  product_render = product=> (
    <div className='ProductDetail-item'>
      <h2 className='ProductDetail-item-title'>{product.name}</h2>
      <img className='ProductDetail-item-image' src={product.image} alt={product.name} />
      <div className='ProductDetail-item-details'>
        <p className='ProductDetail-item-details-description'>{product.description}</p>
        <div className='ProductDetail-item-details-tags'>
          {product.tags.map(tag=> <div className='ProductDetail-item-details-tags-tag' key={tag}>{tag}</div>)}
        </div>
        <div className='ProductDetail-item-details-color'>
          Color:
          <span className='ProductDetail-item-details-color-ball' style={{backgroundColor: product.color}}>&nbsp;</span>
        </div>
        <div className='ProductDetail-item-details-system'>
          Sistema Operativo:
          <span className='ProductDetail-item-details-system-tag'>{product.system}</span>
        </div>
        <div className='ProductDetail-item-details-price'>
          Precio:
          <span className='ProductDetail-item-details-price-tag'>{product.price}</span>
        </div>
        <div className='ProductDetail-item-details-score'>
          Valoración:
          <span className='ProductDetail-item-details-score-tag'>{product.score} &#9733;</span>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <div className='ProductDetail'>
        {this.props.product === null ? this.error_render() : this.product_render(this.props.product)}
      </div>
    )
  }
}

function mapStateToProps(state, props) {

  const selected_product = props.match.params.product
  const {products} = state
  return {
    product: products.find(product=> product.id === selected_product) || null
  }
}


export default connect(mapStateToProps)(ProductDetail)
