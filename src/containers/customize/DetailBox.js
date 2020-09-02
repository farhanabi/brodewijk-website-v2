import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import Loading from 'components/Loading';
import { currencyFormatter } from 'utils/number';

function DetailBox (props){
  const { fabric, price, feature } = props
  const { t } = useTranslation("customize");

  return (
    <div id="detail-box-section">
      <h5 className="title">{t("detail-box-section.title")}</h5>
      {fabric && feature && price ? (
        <>
          <p className="text">
            <strong>{t("detail-box-section.features.fabric")}:</strong>&nbsp;
            {fabric ? `${fabric.name} ${fabric.colorName}` : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.lining")}:</strong>&nbsp;
            {feature && feature[0] ? `${feature[0].data.name} ${feature[0].data.child.name}` : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.canvas")}:</strong>&nbsp;
            {feature && feature[1] ? feature[1].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.shoulder")}:</strong>&nbsp;
            {feature && feature[2] ? feature[2].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.lapels")}:</strong>&nbsp;
            {feature && feature[3] ? feature[3].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.chest-pocket")}:</strong>&nbsp;
            {feature && feature[4] ? feature[4].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.buttons")}:</strong>&nbsp;
            {feature && feature[5] ? feature[5].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.pockets")}:</strong>&nbsp;
            {feature && feature[6] ? feature[6].data.name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.vents")}:</strong>&nbsp;
            {feature && feature[7] ? feature[7].data.name : ''}
          </p>

          <div className="price-wrapper">
            <p className="text"><strong>{t("detail-box-section.price")}:</strong></p>
            <p className="text-price">Rp{currencyFormatter(price)}</p>
          </div>

          <div className="btn-wrapper">
            <Button className="btn-outline-black all" onClick={() => props.addToCart()}>{t("detail-box-section.add-to-cart")}</Button>
          </div>
        </>
      ) : <Loading text />}
    </div>
  )
}

export default DetailBox