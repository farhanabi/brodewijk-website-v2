import React from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/commons/Header/Desktop'
import Footer from 'containers/commons/Footer'
import { withRouter } from 'react-router-dom'

const CommonLayout = (props) => {
  const { header, page, footer } = props;
  return (
    <div>
      {header === "white" ? (<Header white />) : (<Header/>)}
      {props.children}
      {footer && (<Footer/>)}
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

