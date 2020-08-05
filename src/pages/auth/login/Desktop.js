import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import Layout from 'layout/CommonDesktop';

function LoginDesktop (props){
  const { t } = useTranslation("authorization");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false)

  return(
    <Layout header="white" page={t("login.title.page")}>
      <div id="login-desktop">
        <Container>
          <Row className="row-content">
            <Col md={6}>
              <h2 className="title">{t("login.title.text")}</h2>
              <div className="wrapper-form">
                <FormGroup>
                  <Label>{t("login.form.email.label")}</Label>
                  <Input type="email" 
                    placeholder={t("login.form.email.placeholder")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>{t("login.form.password.label")}</Label>
                  <div className="pass-wrapper">
                    <Input type={passwordShown ? "text" : "password"} 
                      placeholder={t("login.form.password.placeholder")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordShown ? (
                      <i onClick={() => setPasswordShown(false)} className="far fa-eye-slash"/>
                    ) : (
                      <i onClick={() => setPasswordShown(true)} className="far fa-eye"/>
                    )}
                  </div>
                </FormGroup>
                <FormGroup className="wrapper-btn">
                  {email.length > 0 && password.length > 0 ? (
                    <Button className="btn-form">{t("login.form.button")}</Button>
                  ) : (
                    <Button className="btn-form" disabled>{t("login.form.button")}</Button>
                  )}
                </FormGroup>
                <div>
                  <p className="text">{t("login.create-account.text")}&nbsp;
                    <Link to="/register" className="link">{t("login.create-account.link")}</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default LoginDesktop;