import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import qs from 'qs';
import { connect } from "react-redux";
import { toastr } from 'react-redux-toastr';
import * as yup from 'yup';
import { Formik } from 'formik';

import { Container, Row, Col, Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Layout from 'layout/CommonMobile';

import User from 'classes/User';
import loginApi from 'services/login';
import userProfileApi from 'services/user-profile';
import * as authActions from 'state/ducks/auth/actions';

function LoginMobile (props){
  const { t } = useTranslation("authorization");
  const [submitStatus, setSubmitStatus] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const initValues = {
    email: "",
    password: ""
  }

  const validationSchema = yup.object({
    email: yup.string()
      .required('Email is required')
      .email('It\'s not a valid email'),
    password: yup.string()
      .required('Password is required')
  });

  const submitLogin = (values) => {
    setSubmitStatus(true)
    const data = {
      "identifier": values.email,
      "password": values.password
    }
    loginApi(data)
      .then(res => {
        setSubmitStatus(false)
        const auth = res.data
        fetchUserData(auth)
      })
      .catch(err => {
        console.error(err)
        setSubmitStatus(false)
        return toastr.error(t("login.error-msg.title"), t("login.error-msg.text"))
      })
  }

  const fetchUserData = (auth) => {
    let query = qs.parse(window.location.search.substr(1));
    userProfileApi(auth.token)
      .then(response => {
        const user = response.data.data;
        props.login(auth, user);
        if (typeof query['redirectTo'] === 'string') {
          window.location= query['redirectTo']
        } else {
          window.location = "/";
        }
      })
      .catch(err => alert(err))
  }

  return(
    <Layout header="white" page={t("login.title.page")}>
      <div id="login-mobile">
        <Container>
          <Row className="row-content">
            <Col>
              <h2 className="title">{t("login.title.text")}</h2>
              <div className="wrapper-form">
              <Formik 
                  initialValues={initValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitLogin(values)}
                >
                {formik => {
                  const { handleChange, handleBlur, values, touched, errors, handleSubmit } = formik;
                  return (
                    <>
                      <FormGroup>
                        <Label>{t("login.form.email.label")}</Label>
                        <Input type="email" 
                          placeholder={t("login.form.email.placeholder")}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                          invalid={(touched.email && errors.email)}
                        />
                        {touched.email && errors.email && (<FormFeedback>{errors.email}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("login.form.password.label")}</Label>
                        <div className="pass-wrapper">
                          <Input type={passwordShown ? "text" : "password"} 
                            placeholder={t("login.form.password.placeholder")}
                            onChange={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            invalid={(touched.password && errors.password)}
                          />
                          {passwordShown ? (
                            <i onClick={() => setPasswordShown(false)} className="far fa-eye-slash"/>
                          ) : (
                            <i onClick={() => setPasswordShown(true)} className="far fa-eye"/>
                          )}
                        </div>
                        <div className={`invalid-feedback ${touched.password && errors.password ? 'd-block' : 'd-none'}`}>
                          {errors.password}
                        </div>
                      </FormGroup>
                      <FormGroup className="wrapper-btn">
                        <Button className="btn-form" 
                          onClick={handleSubmit}
                          disabled={submitStatus}
                        >
                          {submitStatus ? "Loading ..." : t("login.form.button")}
                        </Button>
                      </FormGroup>
                    </>
                  )}}
                </Formik>
                <div>
                  <p className="text">{t("login.create-account.or")}&nbsp;
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

const mapStateToProps = (state) => ({
  auth: state.auth.auth
})

const mapDispatchToProps = (dispatch) => ({
  login: (auth, user) => dispatch([
    authActions.setAuth({ token: auth.token, expires_in: auth.expires_in, logged: true }),
    authActions.setUser(new User(user.email, user.username, user.first_name, user.last_name, user.phone_number))
  ]),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginMobile);