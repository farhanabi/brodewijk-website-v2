import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function TnC() {

  const { t } = useTranslation("termsandconditions");
  const dataTnC = [
    {
      sectionTitle: t("tnc-section.section.how-to-order.title"),
      sectionContent: t("tnc-section.section.how-to-order.content"),
    }
  ]
  return(
    <div id="tnc-section">
      <Container>
        <h5 className="title-tnc">{t("tnc-section.title")}</h5>
        <div className="tnc-section">
          <h5 className="section-title">{t("tnc-section.section.how-to-order.title")}</h5>
          <p className="section-content">{t("tnc-section.section.how-to-order.content")}</p>
        </div>
        <div className="tnc-section">
          <h5 className="section-title">{t("tnc-section.section.how-to-measure.title")}</h5>
          <p className="section-content">
            {t("tnc-section.section.how-to-measure.content.par-1")}
            <ol>
              <li>{t("tnc-section.section.how-to-measure.content.li-1")}</li>
              <li>{t("tnc-section.section.how-to-measure.content.li-2")}</li>
              <li>
                {t("tnc-section.section.how-to-measure.content.li-3")}
                <ol>
                  <li>{t("tnc-section.section.how-to-measure.content.li-3-li.li-1")}</li>
                  <li>{t("tnc-section.section.how-to-measure.content.li-3-li.li-2")}</li>
                  <li>{t("tnc-section.section.how-to-measure.content.li-3-li.li-3")}</li>
                </ol>
              </li>
            </ol>
          </p>
        </div>
        <div className="tnc-section">
          <h5 className="section-title">{t("tnc-section.section.payment-method.title")}</h5>
          <p className="section-content">
            <ul>
              <li>{t("tnc-section.section.payment-method.content.li-1")}</li>
              <li>{t("tnc-section.section.payment-method.content.li-2")}</li>
              <li>
                {t("tnc-section.section.payment-method.content.li-3")}
                <ul>
                  <li>{t("tnc-section.section.payment-method.content.li-3-li.li-1")}</li>
                  <li>{t("tnc-section.section.payment-method.content.li-3-li.li-2")}</li>
                  <li>{t("tnc-section.section.payment-method.content.li-3-li.li-3")}</li>
                </ul>
              </li>
              <li>{t("tnc-section.section.payment-method.content.li-4")}</li>
              <li>{t("tnc-section.section.payment-method.content.li-5")}</li>
            </ul>
          </p>
        </div>
        <div className="tnc-section">
          <h5 className="section-title">{t("tnc-section.section.working-process.title")}</h5>
          <p className="section-content">
            <ul>
              <li>{t("tnc-section.section.working-process.content.li-1")}</li>
              <li>{t("tnc-section.section.working-process.content.li-2")}</li>
              <li>{t("tnc-section.section.working-process.content.li-3")}</li>
              <li>{t("tnc-section.section.working-process.content.li-4")}</li>
              <li>{t("tnc-section.section.working-process.content.li-5")}</li>
            </ul>
          </p>
        </div>
        <div className="tnc-section">
          <h5 className="section-title">{t("tnc-section.section.guarantee-return.title")}</h5>
          <p className="section-content">
            <ul>
              <li>{t("tnc-section.section.guarantee-return.content.li-1")}</li>
              <li>{t("tnc-section.section.guarantee-return.content.li-2")}</li>
              <li>
                {t("tnc-section.section.guarantee-return.content.li-3")}
                <ul>
                  <li>{t("tnc-section.section.guarantee-return.content.li-3-li.li-1")}</li>
                  <li>{t("tnc-section.section.guarantee-return.content.li-3-li.li-2")}</li>
                </ul>
                {t("tnc-section.section.guarantee-return.content.li-3-li.uli")}
                <ul>
                  <li>{t("tnc-section.section.guarantee-return.content.li-3-li.uli-li.li-1")}</li>
                  <li>
                    {t("tnc-section.section.guarantee-return.content.li-3-li.uli-li.li-2")}
                    <ul>
                      <li>{t("tnc-section.section.guarantee-return.content.li-3-li.uli-li.li-2-li-1")}</li>
                      <li>{t("tnc-section.section.guarantee-return.content.li-3-li.uli-li.li-2-li-2")}</li>
                      <li>{t("tnc-section.section.guarantee-return.content.li-3-li.uli-li.li-2-li-3")}</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>{t("tnc-section.section.guarantee-return.content.li-4")}</li>
              <li>{t("tnc-section.section.guarantee-return.content.li-5")}</li>
              <li>{t("tnc-section.section.guarantee-return.content.li-6")}</li>
              <li>{t("tnc-section.section.guarantee-return.content.li-7")}</li>
            </ul>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default TnC;