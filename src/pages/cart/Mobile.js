import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonMobile';
import ListItemMobile from 'containers/cart/list-item/Mobile';
import SummaryMobile from 'containers/cart/summary/Mobile';

import { getCart } from 'services/cart';

function Cart (props){
  const { t } = useTranslation("cart");
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function getDataCart (){
    getCart(props.auth.token)
      .then(res => {
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
        <ListItemMobile items={items} />
        <SummaryMobile totalPrice={totalPrice} />
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