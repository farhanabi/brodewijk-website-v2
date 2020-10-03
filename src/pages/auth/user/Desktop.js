import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import classnames from 'classnames';

import Layout from 'layout/CommonDesktop'
import userProfileApi from 'services/user-profile';

function User (props){
  const { t } = useTranslation("user");
  const [activeTab, setActiveTab] = useState('profile');
  const [dropdownOpen, setOpen] = useState(false);
  const [profileItems, setProfileItems] = useState({})

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const toggleDropdown = () => setOpen(!dropdownOpen);

  function getDataProfile (){
    userProfileApi(props.auth.token)
      .then(res => {
        const firstName = res.data.data.first_name
        const lastName = res.data.data.last_name
        const username = res.data.data.username
        const email = res.data.data.email
        const phoneNumber = res.data.data.phone_number
        setProfileItems({ 
          firstName: firstName || [],
          lastName: lastName || [],
          username: username || [],
          email: email || [],
          phoneNumber: phoneNumber || []
        })
      })
  }

  useEffect(() => {
    getDataProfile()
  }, [])


  return (
    <Layout header="white" page={t("title").toUpperCase()} footer={true}>
      <div id="user-page">
        <Container>
          <Row className="row-content">
            <Col md={12} className="col-content">
              <h2 className="title">{t("title")}</h2>
              <Row className="tab">
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'profile' })}`}
                    onClick={() => toggleTab('profile')}
                  >
                    {t("profile.title")}
                  </Button>
                </Col>
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'address' })}`}
                    onClick={() => toggleTab('address')}
                  >
                    {t("address.title")}
                  </Button>
                </Col>
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'size' })}`}
                    onClick={() => toggleTab('size')}
                  >
                    {t("size.title")}
                  </Button>
                </Col>
              </Row>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="profile" className="tab-content">
                  <Row>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("profile.first-name")}</h2>
                      <p className="value">{profileItems.firstName}</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("profile.last-name")}</h2>
                      <p className="value">{profileItems.lastName}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.email")}</h2>
                      <p className="value">{profileItems.email}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.username")}</h2>
                      <p className="value">{profileItems.username}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.phone-number")}</h2>
                      <p className="value">{profileItems.phoneNumber}</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="address" className="tab-content">
                  <Row id="address-name">
                    <Col>
                      <h2 className="label">{t("address.address-name")}</h2>
                      <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle caret color="outline-secondary">
                          Home
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Home</DropdownItem>
                          <DropdownItem>Office</DropdownItem>
                          <DropdownItem>Sara's Apartment</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.address")}</h2>
                      <p className="value">4823 Country Road</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.apt-number")}</h2>
                      <p className="value">28 Leavy Condo</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.city")}</h2>
                      <p className="value">Dry Creek</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("address.province")}</h2>
                      <p className="value">Alaska</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("address.country")}</h2>
                      <p className="value">United States</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.postal-code")}</h2>
                      <p className="value">99737</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="size" className="tab-content">
                  <Row>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.body-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.body-measurement.height")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.body-measurement.weight")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.upper-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.neck")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.shoulder")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.bicep")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.arm")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.wrist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.torso")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.chest")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.stomach")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.waist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.bottom-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.waist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.seat")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.leg")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.crotch")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.thigh")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.knee")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))