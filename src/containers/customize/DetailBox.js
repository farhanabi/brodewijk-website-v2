import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';

function DetailBox (props){
  const { fabric, price } = props
  const { t } = useTranslation("customize");
  return (
    <div id="detail-box-section">
      <h5 className="title">{t("detail-box-section.title")}</h5>
      <p className="text">
        <strong>{t("detail-box-section.features.fabric")}:</strong>&nbsp;{`${fabric.name} ${fabric.color}`}
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.lining")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.canvas")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.shoulder")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.lapels")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.chest-pocket")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.buttons")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.pockets")}:</strong>&nbsp;
      </p>
      <p className="text">
        <strong>{t("detail-box-section.features.vents")}:</strong>&nbsp;
      </p>

      <div className="price-wrapper">
        <p className="text"><strong>{t("detail-box-section.price")}:</strong></p>
        <p className="text-price">Rp {price}</p>
      </div>

      <div className="btn-wrapper">
        <Button className="btn-outline-black all">{t("detail-box-section.add-to-cart")}</Button>
      </div>
    </div>
  )
}

export default DetailBox