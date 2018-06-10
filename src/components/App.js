import React, { Component }       from 'react'
import {connect}                  from 'react-redux'
import { Switch, Route }          from 'react-router-dom'

import { getProducts }            from '../utils/api'
import { setProducts }            from '../actions'
import { setStatus }              from '../actions'

import ProductList                from './ProductList'
import ProductDetail              from './ProductDetail'
import Loading                    from './Loading'

import './App.css';

export class App extends Component {

  componentDidMount() {
    getProducts()
      .then(res=> {
        this.props.setProducts(res.data.phones)
        this.props.setStatus('ok')
      })
      .catch(err=> {
        this.props.setStatus('error')
      })
  }

  renderContent = status=> {
    if (status === 'loading') return <Loading />
    if (status === 'error') return (
        <p className='App-content-error'>
          An error has ocurred
          <br />
          I'm sorry
          <br />
          <span role='img' aria-label='sad face'>😞</span>
        </p>
    )
    if (status === 'ok') return (
      <Switch>
        <Route
          exact path='/'
          component={ProductList}
        />
        <Route
          exact path='/:product'
          component={ProductDetail}
        />
      </Switch>
    )
  }


  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <a className='App-title' href='/'>Mobile phone store</a>
        </header>
        <div className='App-content'>
          {this.renderContent(this.props.status)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  const {status} = state

  return {
    status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProducts: products=> dispatch(setProducts(products)),
    setStatus: status=> dispatch(setStatus(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App)
