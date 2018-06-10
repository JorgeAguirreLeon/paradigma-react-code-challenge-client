import React      from 'react'
import PropTypes  from 'prop-types'
import            './Loading.css'

const Loading = ({className, color, ...rest})=> {

  const loading_classname = `animated-loading ${className}`

  return (
    <div
      className={loading_classname}
      {...rest}
    >
      <div
        className='animated-loading-box'
        style={{borderColor: color}}
      >
        <div
          className='animated-loading-inner-box'
          style={{background: color}}
        />
      </div>
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

Loading.defaultProps = {
  className: '',
  color: '#FF550A'
}

export default Loading
