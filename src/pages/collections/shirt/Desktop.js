import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'reactstrap';

import Layout from 'layout/CommonDesktop'

import SideBar from 'containers/collections/SideBar'
import Product from 'containers/collections/product/Desktop'

const collections = [
  {
    id: 1,
    name: "Linen Shirt", 
    description: "Classic style, soft and breathable fabric that's perfect for warm climates and the hot summer months, suitable for both casual and semi formal looks",
    image: require('assets/images/collections/shirt/Banner---Dress-Shirt.jpg'),
    collections: [
      {
        id: 1,
        name: "Ivory Linen Shirt",
        image: require('assets/images/collections/shirt/Ivory Linen Shirt.jpg'),
        price: "Rp349.000",
      },
      {
        id: 2,
        name: "Terracotta Linen Shirt",
        image: require('assets/images/collections/shirt/Terracotta Linen Shirt.jpg'),
        price: "Rp349.000",
      },
      {
        id: 3,
        name: "Red Brick Linen Shirt",
        image: require('assets/images/collections/shirt/Red Brick Linen Shirt.jpg'),
        price: "Rp349.000",
      },
      {
        id: 4,
        name: "Mocha Brown Linen Shirt",
        image: require('assets/images/collections/shirt/Mocha Brown Linen Shirt.jpg'),
        price: "Rp349.000",
      }
    ]
  },
  {
    id: 2,
    name: "Open Collar Shirt",
    description: "Made from cotton modal material, it drapes nicely and also feels good. Relaxed fit, easy to wear, and suitable for all casual looks",
    image: require('assets/images/collections/shirt/Banner---Classy-Chillin.jpg'),
    collections: [
      {
        id: 1,
        name: "Red Retro Bowling Shirt",
        image: require('assets/images/collections/shirt/Red Retro Bowling Shirt.jpg'),
        price: "Rp352.500",
      },
      {
        id: 2,
        name: "Green Retro Bowling Shirt",
        image: require('assets/images/collections/shirt/Green Retro Bowling Shirt.jpg'),
        price: "Rp352.500",
      },
      {
        id: 3,
        name: "Pajamas Blue Bowling Shirt",
        image: require('assets/images/collections/shirt/Pajamas Blue Bowling Shirt.jpg'),
        price: "Rp352.500",
      },
      {
        id: 4,
        name: "Green Stripes Bowling Shirt",
        image: require('assets/images/collections/shirt/Green Stripe Bowling Shirt.jpg'),
        price: "Rp352.500",
      }
    ]
  }
]

function ShirtCollections (){
  const { t } = useTranslation("collection");
  return (
    <Layout header="white" page={`${t("shirt").toUpperCase()} ${t("title").toUpperCase()}`} footer={true}>
      <div className="page-collection">
        <Container fluid>
          <Row>
            <Col sm={0} md={3}>
              <SideBar active="shirt"/>
            </Col>
            <Col sm={12} md={9}>
              { collections.map((c,idx) =>
                <Row className="collection-container" key={idx}>
                  <Row className="banner-container">
                    <img className="banner-image" src={c.image} alt={c.name}/>
                  </Row>
                  <Row className="products-container">
                    {c.collections.map((col,idx) => <Product key={idx} name={col.name.toUpperCase()} price={col.price} image={col.image}/>)}
                  </Row>
              </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default withRouter(ShirtCollections)
