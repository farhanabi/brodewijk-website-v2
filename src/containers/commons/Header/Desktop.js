import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import DropdownLang from 'components/DropdownLang'
import { connect } from "react-redux";
import * as authActions from 'state/ducks/auth/actions';
import User from 'classes/User';

const logoGram = require('assets/images/Logogram.svg')
const logoText = require('assets/images/Brodewijk-white.png')

function Header(props) {
  const { t } = useTranslation("translation");

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showCustomize, setShowCustomize] = useState(false);
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

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <header id="desktop-header" 
      className={`${scrollPosition > 1 ? 'sticky' : ''} ${props.white ? 'bg-white' : ''}`}
    >
      <Container>
        <Row className="header-bar">
          <Col md={4}>
            <a href="/" className="header-logo">
              <img src={logoGram} alt="Logo-gram" className="img-logogram"/>
              <img src={logoText} alt="Logo-text" className={`img-logotext ${scrollPosition < 655 ? 'd-none' : ''}`}/>
            </a>
          </Col>
          <Col md={8} className="nav-menu">
            <Row className="justify-content-end mr-0 ml-0">
              <Nav>

                {/* CUSTOMIZE */}
                <NavItem>
                  <Dropdown isOpen={showCustomize} 
                    onMouseOver={() => setShowCustomize(true)}
                    onFocus={() => setShowCustomize(true)}
                    onMouseLeave={() => setShowCustomize(false)}
                    onBlur={() => setShowCustomize(false)}
                    toggle={() => setShowCustomize(!showCustomize)}
                  >
                    <DropdownToggle className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                      {t("customize")}
                    </DropdownToggle>
                    <DropdownMenu className={`customize-bar ${props.white ? 'bg-white' : ''}`}>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("suit")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("shirt")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("pants")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("vest")}</Button>
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>

                {/* BOOK APPOINTMENT */}
                <NavItem>
                  <Link to="/book-appointment">
                    <Button className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("book-appointment")}</Button>
                  </Link>
                </NavItem>

                {/* COLLECTIONS */}
                <NavItem>
                  <Link to="/collections">
                    <Button className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("collections")}</Button>
                  </Link>
                </NavItem>

                {/* USER & CART */}
                {props.auth !== null && props.user !== null ? (
                  <>
                    <NavItem>
                      <Dropdown isOpen={showProfile} toggle={() => setShowProfile(!showProfile)}>
                        <DropdownToggle className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                          <i className="fas fa-user" />
                        </DropdownToggle>
                        <DropdownMenu className={`user-bar ${props.white ? 'bg-white' : ''}`}>
                          <DropdownItem className="item">
                            <Link to="/my-profile">
                              <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("profile")}</Button>
                            </Link>
                          </DropdownItem>
                          <DropdownItem className="item">
                            <Button onClick={() => logout()}
                              className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}
                            >
                              {t("logout-button")}
                            </Button>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </NavItem>
                    <NavItem>
                      <Link to="/cart">
                        <Button className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                          <i className="fas fa-shopping-cart"/>
                        </Button>
                      </Link>
                    </NavItem>
                  </>
                ) : (
                  <NavItem>
                    <Link to={loginUrl()}>
                      <Button className={`all ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("login-button")}</Button>
                    </Link>
                  </NavItem>
                )}

                {/* MULTILANG */}
                <NavItem>
                  {props.white ? (<DropdownLang white/>) : (<DropdownLang />)}
                </NavItem>
              </Nav>
            </Row>
          </Col>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
