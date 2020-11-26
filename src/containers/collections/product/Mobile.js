import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Button } from 'reactstrap';


function Product({name,image,price}) {
  const { t } = useTranslation("collection");

  return(
		<Col xs={6} sm={6} md={4} id="collection-product-mobile" >
			<img className="product-image" src={image} alt={name}/>
			<h2 className="product-title">{name}</h2>
			<p className="product-price">{price}</p>
			<Button className="product-view" href={`https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20know%20about%20${name.toLowerCase()}`}>{t("product.view")}</Button>
		</Col>
	)
}

export default Product;
