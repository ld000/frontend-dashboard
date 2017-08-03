import React from 'react'
import './Flower.scss'

class Flower extends React.Component {
  render () {
    return (
      <div className='main-route'>
        <div className='c-spinner'>
          <div className='c-spinner__leaf leaf--1' />
          <div className='c-spinner__leaf leaf--2' />
          <div className='c-spinner__leaf leaf--3' />
          <div className='c-spinner__leaf leaf--4' />
        </div>
      </div>
    )
  }
}

export default Flower
