import React from 'react';
import { Spinner } from 'reactstrap';

const styles = {
  img: {
    display: 'inline',
    width: 20,
    height: 20,
    margin: 0,
  },
  text: {
    verticalAlign: 'middle',
    display: 'inline-block',
    color: '#777777',
  },
};

const Page = ({ text = true }) => (
  <React.Fragment>
    <Spinner color="primary"/>
    {text ? (<span className="loading-text" style={styles.text}>loading...</span>) : null}
  </React.Fragment>
);

export default Page;
