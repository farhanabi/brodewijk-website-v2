import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { toastr } from 'react-redux-toastr';

import Layout from 'layout/CommonMobile'
import registerApi from 'services/register';

function RegisterLogin (props){
  const { t } = useTranslation("authorization")
  const [submitStatus, setSubmitStatus] = useState(false)
  const initValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: ""
  }

  const validationSchema = yup.object({
    first_name: yup.string()
      .required('First name is required'),
    username: yup.string()
      .required('Username is required'),
    email: yup.string()
      .required('Email is required')
      .email('It\'s not a valid email'),
    phone_number: yup.string()
      .required('Phone number is required')
      .matches(/^08(\d{8,13})$/, 'Phone must be number and start with 08 (length 10 - 15 digit)'),
    password: yup.string()
      .required('Password is required')
      .min(8),
    password_confirmation: yup.string()
      .required('Password confirmation is required')
      .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
      })
  });

  // SUBMIT
  function submit (values){
    setSubmitStatus(true)
    const data = {
      "first_name": values.first_name,
      "last_name": values.last_name,
      "username": values.username,
      "email": values.email,
      "phone_number": values.phone_number,
      "password": values.password,
      "password_confirmation": values.password_confirmation
    }
    registerApi(data)
      .then(res => {
        setSubmitStatus(false)
        toastr.success(t("sign-up.success-msg.title"), t("sign-up.success-msg.text"))
      })
      .catch(err => {
        console.error(err)
        setSubmitStatus(false)
        toastr.error(t("sign-up.error-msg.title"), t("sign-up.error-msg.text"))
      })
  }

  return(
    <Layout header="white" page={t("sign-up.title.page")} footer={false}>
      <div id="register-mobile">
        <Container>
          <Row className="row-content">
            <Col>
              <h2 className="title">{t("sign-up.title.text")}</h2>
              <div className="wrapper-form">
                <Formik 
                  initialValues={initValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submit(values)}
                >
                {formik => {
                  const { handleChange, handleBlur, values, touched, errors, handleSubmit } = formik;
                  return (
                    <>
                      <FormGroup>
                        <Label>{t("sign-up.form.first-name.label")}</Label>
                        <Input type="text" 
                          placeholder={t("sign-up.form.first-name.placeholder")} 
                          onChange={handleChange("first_name")}
                          onBlur={handleBlur("first_name")}
                          value={values.first_name}
                          invalid={(touched.first_name && errors.first_name)}
                        />
                        {touched.first_name && errors.first_name && (<FormFeedback>{errors.first_name}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.last-name.label")}</Label>
                        <Input type="text" 
                          placeholder={t("sign-up.form.last-name.placeholder")} 
                          onChange={handleChange("last_name")}
                          onBlur={handleBlur("last_name")}
                          value={values.last_name}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.username.label")}</Label>
                        <Input type="text" 
                          placeholder={t("sign-up.form.username.placeholder")}
                          onChange={handleChange("username")}
                          onBlur={handleBlur("username")}
                          value={values.username}
                          invalid={(touched.username && errors.username)}
                        />
                        {touched.username && errors.username && (<FormFeedback>{errors.username}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.email.label")}</Label>
                        <Input type="email" 
                          placeholder={t("sign-up.form.email.placeholder")}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                          value={values.email}
                          invalid={(touched.email && errors.email)}
                        />
                        {touched.email && errors.email && (<FormFeedback>{errors.email}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.phone.label")}</Label>
                        <Input type="text" 
                          placeholder={t("sign-up.form.phone.placeholder")}
                          onChange={handleChange("phone_number")}
                          onBlur={handleBlur("phone_number")}
                          value={values.phone_number}
                          invalid={(touched.phone_number && errors.phone_number)}
                        />
                        {touched.phone_number && errors.phone_number && (<FormFeedback>{errors.phone_number}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.password.label")}</Label>
                        <Input type="password" 
                          placeholder={t("sign-up.form.password.placeholder")}
                          onChange={handleChange("password")}
                          onBlur={handleBlur("password")}
                          value={values.password}
                          invalid={(touched.password && errors.password)}
                        />
                        {touched.password && errors.password && (<FormFeedback>{errors.password}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup>
                        <Label>{t("sign-up.form.re-password.label")}</Label>
                        <Input type="password" 
                          placeholder={t("sign-up.form.re-password.placeholder")}
                          onChange={handleChange("password_confirmation")}
                          onBlur={handleBlur("password_confirmation")}
                          value={values.password_confirmation}
                          invalid={(touched.password_confirmation && errors.password_confirmation)}
                        />
                        {touched.password_confirmation && errors.password_confirmation && (<FormFeedback>{errors.password_confirmation}</FormFeedback>)}
                      </FormGroup>
                      <FormGroup className="wrapper-btn">
                        <Button className="btn-form" onClick={handleSubmit} disabled={submitStatus}>
                          {submitStatus ? "Loading ..." : t("sign-up.form.button")}
                        </Button>
                      </FormGroup>
                    </>
                  )}}
                </Formik>
                <div>
                  <p className="text">{t("sign-up.already-have-account.text")}&nbsp;
                    <Link className="link" to="/login">{t("sign-up.already-have-account.link")}</Link>
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

export default RegisterLogin;