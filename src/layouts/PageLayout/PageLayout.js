import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import LeftSideLayout from '../LeftSideLayout'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <LeftSideLayout key='left' isOrNotSuper={false} />
    <div className='main'>
      <div className='content-layout'
        id='content-layout'>
        {children}
      </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
