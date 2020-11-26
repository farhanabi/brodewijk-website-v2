import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'reactstrap';

import Layout from 'layout/CommonMobile'

import SideBar from 'containers/collections/SideBar'
import Product from 'containers/collections/product/Mobile'

const collections = [
  {
    id: 1,
    name: 'Light Grey Gurkha Pants',
    image: require('assets/images/collections/pants/Light Grey Gurkha Pants.jpg'),
    price: 'Rp395.000'
  },
  {
    id: 2,
    name: 'Dark Grey Gurkha Pants',
    image: require('assets/images/collections/pants/Dark Grey Gurkha Pants.jpg'),
    price: 'Rp490.000'
  },
  {
    id: 3,
    name: 'Olive Gurkha Pants',
    image: require('assets/images/collections/pants/Olive Gurkha Pants.jpg'),
    price: 'Rp395.000'
  }
]


function PantsCollections (){
  const { t } = useTranslation("collection");
  return (
    <Layout header="white" page={`${t("pants").toUpperCase()} ${t("title").toUpperCase()}`} footer={true}>
      <div className="page-collection">
          <Row className="collection-container">
            <Row className="banner-container">
              <img className="banner-image" src={require('assets/images/collections/pants/Banner---Gurkha-Pants-Mobile.jpg')} alt="Gurkha Pants"/>
            </Row>
            <Row className="products-container">
              {collections.map((col,idx) => <Product key={idx} name={col.name.toUpperCase()} price={col.price} image={col.image}/>)}
            </Row>
          </Row>
      </div>
    </Layout>
  )
}

export default withRouter(PantsCollections)