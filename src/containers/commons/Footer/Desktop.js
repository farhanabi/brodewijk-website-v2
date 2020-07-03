import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownLang from 'components/DropdownLang'

const logo = require('assets/images/Logo-horizontal.svg')
const links = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Collections',
    link: '/collections'
  },
  {
    label: 'About Us',
    link: '/about'
  },
  {
    label: 'Contact Us',
    link: '/contact'
  },
  {
    label: 'Partnership',
    link: '/partnership'
  }
]

const features = [
  {
    label: 'Customize',
    link: '/customize'
  },
  {
    label: 'Book Appointment',
    link: '/book-appointment'
  },
  {
    label: 'Size Guides',
    link: '/size-guides'
  }
]

const contacts = [
  {
    icon: 'fas fa-envelope',
    label: 'contact@brodewijk.com',
    link: '/mail'
  },
  {
    icon: 'fab fa-instagram',
    label: '@brodewijk.id',
    link: '/ig'
  },
  {
    icon: 'fas fa-phone-alt',
    label: '+1 (917) 900-9571 (Call Only)',
    link: '/phone'
  },
  {
    icon: '',
    label: '+62 8156051373 (Call or Whatsapp)',
    link: '/phone'
  }
]

const linkCredits = [
  {
    label: 'Privacy Policy',
    link: '/privacy-policy',
    border_right: true
  },
  {
    label: 'Term & Condition',
    link: '/term-condition',
    border_right: true
  },
  {
    label: 'FAQ',
    link: '/faq',
    border_right: false
  }
]

function Footer() {
  return(
    <footer className="section-footer">
      <Container className="footer-top">
        <Row className="align-item-center">
          <Col md={12} lg={6}>
            <Row>
              <Col md={8} className="footer-links">
                <div className="wrapper-img">
                  <a href="/" className="footer-logo">
                    <img src={logo} alt="Logo" className="img-logo"/>
                  </a>
                </div>
                <div className="wrapper-lang">
                  <p className="text-lang">Language</p>
                </div>
                <div className="wrapper-lang">
                  <DropdownLang/>
                </div>
              </Col>
              <Col md={4} className="footer-links">
                <h5>LINKS</h5>
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
          <Col md={12} lg={6}>
            <Row>
              <Col md={5} className="footer-links">
                <h5>FEATURES</h5>
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
              <Col md={7} className="footer-links">
                <h5>CONTACT</h5>
                <div>
                  <p>Jl. Ganesha No. 15F, Kel. Lebak Siliwangi, Kec. Coblong, Bandung, Jawa Barat 40132 </p>
                  <ul className="list-unstyled">
                  {contacts.map((v, k) => (
                    <li className="menu-item" key={k}>
                      <a href={v.link} className="link-item">
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
          <Col md={6}>
            <span className="footer-copyright">Copyright © 2019 - 2020 Brodewijk Inc. All Right Reserved</span>
          </Col>
          <Col md={6} style={{ textAlign: 'right' }}>
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