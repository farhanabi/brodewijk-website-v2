import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function PrivacyPolicy() {

  const { t } = useTranslation("privacypolicy");
  
  return(
    <div id="privacy-policy-section">
      <Container>
        <h5 className="title-privacy-policy">{t("privacy-policy-section.title")}</h5>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.information-we-collect.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.information-we-collect.content-1")}</p>
          <p className="section-content">{t("privacy-policy-section.section.information-we-collect.content-2")}</p>
          <ul>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-1")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-2")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-3")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-4")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-5")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-6")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-7")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-8")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-9")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-10")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-11")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-12")}</li>
            <li>{t("privacy-policy-section.section.information-we-collect.subcontent-13")}</li>
          </ul>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-we-collect-information.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-1")}</p>
          <ul>
            <li>{t("privacy-policy-section.section.how-we-collect-information.subcontent-1")}</li>
            <li>{t("privacy-policy-section.section.how-we-collect-information.subcontent-2")}</li>
            <li>{t("privacy-policy-section.section.how-we-collect-information.subcontent-3")}</li>
            <li>{t("privacy-policy-section.section.how-we-collect-information.subcontent-4")}</li>
            <li>{t("privacy-policy-section.section.how-we-collect-information.subcontent-5")}</li>
          </ul>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-2")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-3")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-4")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-5")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-6")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-7")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-8")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-9")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-we-collect-information.content-10")}</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-we-use-information.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-we-use-information.content-1")}</p>
          <ul>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-1")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-2")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-3")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-4")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-5")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-6")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-7")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-8")}</li>
            <li>{t("privacy-policy-section.section.how-we-use-information.subcontent-9")}</li>
          </ul>
          <p className="section-content">{t("privacy-policy-section.section.how-we-use-information.content-2-1")}<a href="mailto:privacy@brodewijk.com">privacy@brodewijk.com</a>{t("privacy-policy-section.section.how-we-use-information.content-2-2")}</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.when-we-share.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.when-we-share.content-1")}</p>
          <p className="section-content">{t("privacy-policy-section.section.when-we-share.content-2")}</p>
          <ul>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-1")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-2")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-3")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-4")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-5")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-6")}</li>
            <li>{t("privacy-policy-section.section.when-we-share.subcontent-2-7")}</li>
          </ul>
          <p className="section-content">{t("privacy-policy-section.section.when-we-share.content-3")}</p>
          <p className="section-content">{t("privacy-policy-section.section.when-we-share.content-4")}<a href="mailto:privacy@brodewijk.com">privacy@brodewijk.com</a>.</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-uses-cookies.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-uses-cookies.content-1")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-uses-cookies.content-2")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-uses-cookies.content-3")}</p>
          <p className="section-content">{t("privacy-policy-section.section.how-uses-cookies.content-4")}</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.third-party-ads.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.third-party-ads.content-1")}</p>
          <p className="section-content">{t("privacy-policy-section.section.third-party-ads.content-2")}<a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-to-modify.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-to-modify.content-1-1")}<a href="mailto:privacy@brodewijk.com">privacy@brodewijk.com</a>{t("privacy-policy-section.section.how-to-modify.content-1-2")}</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-brodewijk-protect.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-brodewijk-protect.content-1")}</p>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.business-transfers.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.business-transfers.content-1")}</p>
          <ul>
            <li>{t("privacy-policy-section.section.business-transfers.subcontent-1-1")}</li>
            <li>{t("privacy-policy-section.section.business-transfers.subcontent-1-2")}</li>
          </ul>
        </div>
        <div className="privacy-policy-section">
          <h5 className="section-title">{t("privacy-policy-section.section.how-to-contact-brodewijk.title")}</h5>
          <p className="section-content">{t("privacy-policy-section.section.how-to-contact-brodewijk.content-1")}<a href="mailto:privacy@brodewijk.com">privacy@brodewijk.com</a></p>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy;