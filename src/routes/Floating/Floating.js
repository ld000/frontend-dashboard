import React from 'react'
import './Floating.scss'

class Floating extends React.Component {
  render () {
    return (
      <div>
        <div className='share'>
          <i className='fa fa-plus' />
        </div>
        <div className='one'>
          <i className='fa fa-facebook' />
        </div>
        <div className='two'>
          <i className='fa fa-twitter' />
        </div>
        <div className='three'>
          <i className='fa fa-instagram' />
        </div>
      </div>
    )
  }
}

export default Floating
