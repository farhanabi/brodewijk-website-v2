import React from 'react';

const img = require('assets/images/loading.svg')

const styles = {
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-50px',
  },
  text: {
    fontFamily: 'Playfair Display',
    verticalAlign: 'middle',
    display: 'inline-block',
    color: '#111111',
    width: '100%'
  },
};

const Loading = ({ text = false }) => (
  <React.Fragment>
    <div style={styles.loader}>
      {text ? (<span className="loading-text" style={styles.text}>Loading...</span>) 
      : (<img src={img} style={styles.img} alt="Loading..." className="img-load" />)}
    </div>
  </React.Fragment>
);

export default Loading;
