import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonDesktop';
import SummaryDesktop from 'containers/cart/summary/Desktop';
import ListItemDesktop from 'containers/cart/list-item/Desktop';
import { getCart } from 'services/cart';

function Cart (props){
  const { t } = useTranslation("cart");
  const [items, setItems] = useState({})
  const [summary, setSummary] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function getDataCart (){
    getCart(props.auth.token)
      .then(res => {
        const summary = res.data.data.items.map(v => ({ id: v.id, name: `Custom ${v.category}`, price: v.price }))
        setSummary(summary)
        const suit = res.data.data.items.filter(v => v.category === "Suit")
        const pants = res.data.data.items.filter(v => v.category === "Pants")
        const shirt = res.data.data.items.filter(v => v.category === "Shirt")
        const vest = res.data.data.items.filter(v => v.category === "Vest")
        setItems({ 
          suit: suit || [],
          pants: pants || [],
          shirt: shirt || [],
          vest: vest || []
        })
        setTotalPrice(res.data.data.total_price)
      })
  }

  useEffect(() => {
    getDataCart()
  }, [])

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-cart">
        <Container>
          <h2 className="title">{t("title")}</h2>
          <Row>
            <Col md={8} className="col-item">
              <ListItemDesktop items={items} />
            </Col>
            <Col md={4} className="col-summary">
              <SummaryDesktop items={summary} totalPrice={totalPrice} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))