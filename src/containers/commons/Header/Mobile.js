import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as authActions from 'state/ducks/auth/actions';
import User from 'classes/User';

const logo = require('assets/images/Logo-horizontal.svg')
const logogram = require('assets/images/Logogram.svg')

function Header(props) {
  const { t } = useTranslation("translation");

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [showCollections, setShowCollections] = useState(false)
  const [showProfile, setShowProfile] = useState(false);

  const loginUrl = () => {
    if (
        (window.location.pathname.indexOf('/login') !== -1)
        || (window.location.pathname.indexOf('/register') !== -1 )
        || (window.location.pathname === '/')
        || (window.location.pathname.indexOf('/forgot-password') !== -1)
      ) {
      return "/login";
    }
    return "/login?redirectTo=" + encodeURIComponent(window.location.href);
  }

  const logout = () => {
    props.logout()
    window.location.reload();
  }

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
    setShowCollections(false)
    setShowProfile(false)
  }

  function handleShowCustomize() {
    setShowCustomize(!showCustomize)
  }

  function handleShowCollections() {
    setShowCollections(!showCollections)
  }

  function handleShowProfile() {
    setShowProfile(!showProfile)
  }

  return(
    <header id="mobile-header" 
      className={`${scrollPosition > 1 ? 'sticky' : ''} ${props.white ? 'bg-white' : ''} ${!showNavbar && scrollPosition < 1 ? 'transparent' : ''}`} 
    >
      <Container>
        <Row className="header-bar">
          <Col xs={2} className="nav-menu">
            {props.page === "LOG IN" || props.page ===  "SIGN UP" || props.page === "MEASURE" || props.page ===  "MASUK" || props.page === "DAFTAR" || props.page === "UKURAN" ? (
              <Button className="btn-outline-black" onClick={props.history.goBack}>
                <i className="fas fa-arrow-left" />
              </Button>
            ) : (
              showNavbar ? (
                <Button onClick={handleShowNavbar} className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                  <i className="fas fa-times" />
                </Button>
              ) : (
                <Button onClick={handleShowNavbar} className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                  <i className="fas fa-bars" />
                </Button>
              )
            )}
          </Col>
          <Col xs={8} className="nav-center">
            <a href="/" className={`header-logo ${(props.page !== 'Home' && props.page !== 'Link') && 'd-none'}`}>
              <img src={logo} alt="Logo" className="img-logo"/>
            </a>
            <h2 className={`title ${(props.page === 'Home' || props.page === 'Link') && 'd-none'} ${props.white && 'white'}`}>{props.page}</h2>
          </Col>
          <Col xs={2} className="nav-logogram">
            <a href="/" className={`header-logo ${(props.page === 'Home' || props.page === 'Link') && 'd-none'}`}>
              <img src={logogram} alt="Logo" className="img-logogram"/>
            </a>
          </Col>
        </Row>
        {showNavbar && (
          <Row className="nav-list">
            <Col xs={12} className="nav-item">
              <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`} onClick={handleShowCustomize}>
                {t("customize")}
              </Button>
            </Col>
            {showCustomize && (
              <Col xs={12} className="nav-item">
                <Row className={`nav-list customize ${props.white ? 'bg-white' : ''}`}>
                  <Col xs={12} className="nav-item">
                    <Link to="/customize/suit">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("suit")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/customize/shirt">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("shirt")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/customize/pants">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("pants")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/customize/vest">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("vest")}</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            )}
            <Col xs={12} className="nav-item">
              <Link to="/book-appointment">
                <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("book-appointment")}</Button>
              </Link>
            </Col>
            <Col xs={12} className="nav-item">
                <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}  onClick={handleShowCollections}>
                  {t("collections")}
                </Button>
            </Col>
            {showCollections && (
              <Col xs={12} className="nav-item">
                <Row className={`nav-list customize ${props.white ? 'bg-white' : ''}`}>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections/suit">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("suit")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections/shirt">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("shirt")}</Button>
                    </Link>
                  </Col>
                  <Col xs={12} className="nav-item">
                    <Link to="/collections/pants">
                      <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("pants")}</Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            )}
            {props.auth !== null && props.user !== null ? (
              <>
              <Col xs={12} className="nav-item">
                <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`} onClick={handleShowProfile}>
                  {t("profile")}
                </Button>
              </Col>
              {showProfile && (
                <Col xs={12} className="nav-item">
                  <Row className={`nav-list customize ${props.white ? 'bg-white' : ''}`}>
                    <Col xs={12} className="nav-item">
                      <Link to="/cart">
                        <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                          {t("cart")} 
                        </Button>
                      </Link>
                    </Col>
                    <Col xs={12} className="nav-item">
                      <Link to="/profile">
                        <Button className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("user-information")}</Button>
                      </Link>
                    </Col>
                    <Col xs={12} className="nav-item">
                      <Button onClick={() => logout()}
                          className={`btn-nav-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}
                        >
                        {t("logout-button")}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              )}
              </>
            ) : (
              <Col xs={12} className="nav-item">
                <Link to={loginUrl()}>
                  <Button className={`all ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("login-button")}</Button>
                </Link>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </header>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch([
    authActions.setUser(new User()),
    authActions.setAuth(null)
  ])
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
