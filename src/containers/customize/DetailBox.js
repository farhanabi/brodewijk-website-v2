import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import Loading from 'components/Loading';

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
            {fabric ? `${fabric.name} ${fabric.color}` : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.lining")}:</strong>&nbsp;
            {feature && feature["Lining"] ? `${feature["Lining"].name} ${feature["Lining"].child.name}` : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.canvas")}:</strong>&nbsp;
            {feature && feature["Canvas Type"] ? feature["Canvas Type"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.shoulder")}:</strong>&nbsp;
            {feature && feature["Shoulder Type"] ? feature["Shoulder Type"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.lapels")}:</strong>&nbsp;
            {feature && feature["Lapels"] ? feature["Lapels"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.chest-pocket")}:</strong>&nbsp;
            {feature && feature["Chest Pocket"] ? feature["Chest Pocket"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.buttons")}:</strong>&nbsp;
            {feature && feature["Buttons"] ? feature["Buttons"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.pockets")}:</strong>&nbsp;
            {feature && feature["Pockets"] ? feature["Pockets"].name : ''}
          </p>
          <p className="text">
            <strong>{t("detail-box-section.features.vents")}:</strong>&nbsp;
            {feature && feature["Vents"] ? feature["Vents"].name : ''}
          </p>

          <div className="price-wrapper">
            <p className="text"><strong>{t("detail-box-section.price")}:</strong></p>
            <p className="text-price">Rp{price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
          </div>

          <div className="btn-wrapper">
            <Button className="btn-outline-black all">{t("detail-box-section.add-to-cart")}</Button>
          </div>
        </>
      ) : <Loading text />}
    </div>
  )
}

export default DetailBox