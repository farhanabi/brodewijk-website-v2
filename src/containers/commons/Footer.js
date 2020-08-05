import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import DropdownLang from 'components/DropdownLang'

const logo = require('assets/images/Logo-horizontal.svg')

function Footer() {
  const { t } = useTranslation("translation");
  const links = [
    {
      label: t("links.home"),
      link: '/'
    },
    {
      label: t("links.collections"),
      link: '/collections'
    },
    {
      label: t("links.about-us"),
      link: '/about'
    },
    {
      label: t("links.contact-us"),
      link: '/contact'
    },
    {
      label: t("links.partnership"),
      link: '/partnership'
    }
  ]
  
  const features = [
    {
      label: t("features.customize"),
      link: '/customize'
    },
    {
      label: t("features.book-appointment"),
      link: '/book-appointment'
    },
    {
      label: t("features.size-guide"),
      link: '/size-guide'
    }
  ]
  
  const contacts = [
    {
      icon: 'fas fa-envelope',
      label: t("contact.mail"),
      link: 'mailto:contact@brodewijk.com'
    },
    {
      icon: 'fab fa-instagram',
      label: t("contact.instagram"),
      link: 'https://www.instagram.com/brodewijk.id/'
    },
    {
      icon: 'fas fa-phone-alt',
      label: t("contact.whatsapp-only"),
      link: 'https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you'
    }
  ]
  
  const linkCredits = [
    {
      label: t("privacy-policy"),
      link: '/privacy-policy',
      border_right: true
    },
    {
      label: t("terms-conditions"),
      link: '/terms-and-conditions',
      border_right: true
    },
    {
      label: t("help"),
      link: '/help',
      border_right: false
    }
  ]

  return(
    <footer className="section-footer">
      <Container className="footer-top">
        <Row className="align-item-center">
          <Col md={12} lg={6} xs={12}>
            <Row>
              <Col lg={8} xs={12} className="footer-links">
                <Row>
                  <Col xs={5} lg={12} className="wrapper-img">
                    <a href="/" className="footer-logo">
                      <img src={logo} alt="Logo" className="img-logo"/>
                    </a>
                  </Col>
                  <Col xs={7} lg={12} className="wrapper-lang">
                    <p className="text-lang">{t("language")}</p>
                    <DropdownLang/>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} xs={12} className="footer-links">
                <h5>{t("links.heading")}</h5>
                <div>
                  <ul className="list-unstyled">
                    {links.map((v, k) => (
                      <li className="menu-item" key={k}>
                        <Link to={v.link} className='link-item'>{v.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={6} xs={12}>
            <Row>
              <Col lg={5} xs={12} className="footer-links">
                <h5>{t("features.heading")}</h5>
                <div>
                  <ul className="list-unstyled">
                    {features.map((v, k) => (
                      <li className="menu-item" key={k}>
                        <Link to={v.link} className='link-item'>{v.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={7} xs={12} className="footer-links">
                <h5>{t("contact.heading")}</h5>
                <div>
                  <p>{t("contact.address")}</p>
                  <ul className="list-unstyled">
                  {contacts.map((v, k) => (
                    <li className="menu-item" key={k}>
                      <a href={v.link} className="link-item" target="_blank" rel="noopener noreferrer">
                        {v.icon.length > 0 ? (
                          <i className={v.icon + " icon-item"} aria-hidden="true"/>
                        ) : (
                          <span style={{ marginRight: '14px' }}>&nbsp;</span>
                        )}
                        <p className="d-inline">{v.label}</p>
                      </a>
                    </li>
                  ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    
      {/* footer credit */}
      <Container className="footer-credit">
        <Row>
          <Col lg={6} xs={12} className="copyright">
            <span className="text">{t("copyright")}</span>
          </Col>
          <Col lg={6} xs={12} className="credit">
            {linkCredits.map((v, k) => (
              <div key={k} className={v.border_right ? 'menu-item border-right' : 'menu-item'}>
                <a href={v.link} className="link-item">{v.label}</a>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;