import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const logo = require('assets/images/Logo-horizontal.svg')
const logogram = require('assets/images/Logogram.svg')

function Header(pageName) {
  const { t } = useTranslation("translation");

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  function handleScroll() {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleShowNavbar() {
    setShowNavbar(!showNavbar)
    setShowCustomize(false)
  }

  function handleShowCustomize() {
    setShowCustomize(!showCustomize)
  }

  return(
    <header id="mobile-header" className={`${scrollPosition > 1 ? 'sticky' : ''} ${!showNavbar && scrollPosition < 1 ? 'transparent' : ''}`} >
      <Container>
        <Row className="header-bar">
          <Col xs={2} className="nav-menu">
            {showNavbar ? (
              <Button onClick={handleShowNavbar} className="btn-outline-white">
                <i className="fas fa-times" />
              </Button>
            ) : (
              <Button onClick={handleShowNavbar} className="btn-outline-white">
                <i className="fas fa-bars" />
              </Button>
            )}
          </Col>
          <Col xs={8} className="nav-center">
            <a href="/" className={`header-logo ${pageName='Homepage'?'':'d-none'}`}>
              <img src={logo} alt="Logo" className="img-logo"/>
            </a>
            <h2 className={`title ${pageName='Homepage'?'d-none':''}`}>BOOK APPOINTMENT</h2>
          </Col>
          <Col xs={2} className="nav-logogram">
            <a href="/" className={`header-logo ${pageName='Homepage'?'d-none':''}`}>
              <img src={logogram} alt="Logo" className="img-logogram"/>
            </a>
          </Col>
        </Row>
        {showNavbar && (
          <Row className="nav-list">
            <Col xs={12} className="nav-item">
              <Button className="btn-outline-white btn-nav-item" onClick={handleShowCustomize}>
                {t("customize")}
              </Button>
            </Col>
            {showCustomize && (
              <Col xs={12} className="nav-item">
                <Row className="nav-list customize">
                  <Col xs={12} className="nav-item">
                    <Link to="/collections">
                      <Button className="btn-outline-white btn-nav-item">{t("suit")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections">
                      <Button className="btn-outline-white btn-nav-item">{t("shirt")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections">
                      <Button className="btn-outline-white btn-nav-item">{t("pants")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections">
                      <Button className="btn-outline-white btn-nav-item">{t("vest")}</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            )}
            <Col xs={12} className="nav-item">
              <Link to="/book-appointment">
                <Button className="btn-outline-white btn-nav-item">{t("book-appointment")}</Button>
              </Link>
            </Col>
            <Col xs={12} className="nav-item">
              <Link to="/collections">
                <Button className="btn-outline-white btn-nav-item">{t("collections")}</Button>
              </Link>
            </Col>
            <Col xs={12} className="nav-item">
              <Link to="/login">
                <Button className="btn-outline-white all">{t("login-button")}</Button>
              </Link>
            </Col>
          </Row>
        )}
      </Container>
    </header>
  )
}

export default Header;