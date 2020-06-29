import React from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import { withRouter } from 'react-router-dom'

const CommonLayout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

CommonLayout.defaultProps = {
  builtInNav: true,
};
CommonLayout.propTypes = {
  builtInNav: PropTypes.bool,
};

export default withRouter(CommonLayout)

