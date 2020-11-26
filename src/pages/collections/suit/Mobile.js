import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Row } from 'reactstrap';

import Layout from 'layout/CommonMobile'

import Product from 'containers/collections/product/Mobile'

const collections = [
  {
    "id": 1,
    "name": "Groom’s Collection", 
    "description": "A must have choices for your special day, suit up and make remarkable memories",
    "image": require('assets/images/collections/suit/Banner---Grooms-Collections-Mobile.jpg'),
    "collections": [
      {
        "id": 1,
        "name": "Monochrome Tuxedo With Vest",
        "image": require('assets/images/collections/suit/Monochrome Tuxedo with Vest.jpg'),
        "price": "Rp 2,059,000",
      },
      {
        "id": 2,
        "name": "Burgundy High Twist Suit with Vest",
        "image": require('assets/images/collections/suit/Burgundy High Twist Suit with Vest.jpg'),
        "price": "Rp 2,059,000",
      },
      {
        "id": 3,
        "name": "Grey High Twist Suit with Vest",
        "image": require('assets/images/collections/suit/Grey High Twist Suit with Vest.jpg'),
        "price": "Rp2,059,000",
      },
      {    
        "id":4,
        "name":"Black Tuxedo with Vest",
        "image": require('assets/images/collections/suit/Black Tuxedo with Vest.jpg'),
        "price": "Rp 2,611,000",
      },
      {
        "id": 5,
        "name": "Navy Linen Suit",
        "image": require('assets/images/collections/suit/Navy Linen Suit.jpg'),
        "price": "Rp 1,545,000",
      },
      {
        "id": 6,
        "name": "Pearwood Brown Linen Suit",
        "image": require('assets/images/collections/suit/Pearwood Brown Linen Suit.jpg'),
        "price": "Rp 1,545,000",
      },
      {
        "id": 7,
        "name": "Alabaster Beige Linen Suit",
        "image": require('assets/images/collections/suit/Alabaster Beige Linen Suit.jpg'),
        "price": "Rp 1,545,000",
      }
    ]
  },
  {
    "id": 2,
    "name": "Gentlemen’s Collection",
    "description": "A classic man’s collection available in Linen, Hi-Twist, Semi Wool, and Wool fabrics. Very comfortable on the skin and ideal for everyday workwear or any events ",
    "image": require('assets/images/collections/suit/Banner---Gentlemens-Collection-Mobile.jpg'),
    "collections": [
      {
        "id": 1,
        "name": "Grey Plaid Suit",
        "image": require('assets/images/collections/suit/Grey Plaid Suit.jpg'),
        "price": "Rp 2,555,000",
      },
      {
        "id": 2,
        "name": "Black Pinstripe Suit",
        "image": require('assets/images/collections/suit/Black Pinstripe Suit.jpg'),
        "price": "Rp 2,065,000",
      },
      {
        "id": 3,
        "name": "Navy Plaid Suit",
        "image": require('assets/images/collections/suit/Navy Plaid Suit.jpg'),
        "price": "Rp 2,555,000",
      }
    ]
  }
]

function SuitCollections (){
  const { t } = useTranslation("collection");
  return (
    <Layout header="white" page={`${t("suit").toUpperCase()} ${t("title").toUpperCase()}`} footer={true}>
      <div className="page-collection">
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
      </div>
    </Layout>
  )
}

export default withRouter(SuitCollections)
