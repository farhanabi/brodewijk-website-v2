import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button, FormGroup, FormFeedback, Label, Input } from 'reactstrap';
import validate from 'validate.js';

import Layout from 'layout/CommonMobile'

function RegisterLogin (props){
  const { t } = useTranslation("authorization")
  const [submitStatus, setSubmitStatus] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState(null)
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState(null)
  const [userName, setUserName] = useState("")
  const [userNameError, setUserNameError] = useState(null)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(null)
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState(null)

  // Validate firstname
  useEffect(() => {
    if (submitStatus) validateFirstName()
  }, [firstName])

  function validateFirstName (){
    const constraints = {
      firstName : { presence : { allowEmpty : false } }
    }
    const validFirstName = validate({firstName}, constraints)
    setFirstNameError(validFirstName ? validFirstName.firstName[0] : null)
  }

  // Validate lastname
  useEffect(() => {
    if (submitStatus) validateLastName()
  }, [lastName])

  function validateLastName (){
    const constraints = {
      lastName : { presence : { allowEmpty : false } }
    }
    const validLastName = validate({lastName}, constraints)
    setLastNameError(validLastName ? validLastName.lastName[0] : null)
  }

  // Validate username
  useEffect(() => {
    if (submitStatus) validateUserName()
  }, [userName])

  function validateUserName (){
    const constraints = {
      userName : { presence : { allowEmpty : false } }
    }
    const validUserName = validate({userName}, constraints)
    setUserNameError(validUserName ? validUserName.userName[0] : null)
  }

  // Validate email
  useEffect(() => {
    if (submitStatus) validateEmail()
  }, [email])

  function validateEmail (){
    const constraints = {
      email : { 
        presence : { allowEmpty : false }, 
        email : true
      }
    }
    const validEmail = validate({email}, constraints)
    console.log(validEmail)
    setEmailError(validEmail ? validEmail.email[0] : null)
  }

  // Validate phone
  useEffect(() => {
    if (submitStatus) validatePhone()
  }, [phone])

  function validatePhone (){
    const constraints = {
      phone : {
        presence : { allowEmpty : false },
        format : { pattern : /[0-9]+/ }
      }
    }
    const validPhone = validate({phone}, constraints)
    setPhoneError(validPhone ? validPhone.phone[0] : null)
  }

  // Validate password
  useEffect(() => {
    if (submitStatus) validatePassword()
  }, [password])

  function validatePassword (){
    const constraints = {
      password : {
        presence : { allowEmpty : false}
      }
    }
    const validPassword = validate({password}, constraints)
    setPasswordError(validPassword ? validPassword.password[0] : null)
  }

  // Validate confirm password
  useEffect(() => {
    if (submitStatus) validateConfirmPassword()
  }, [confirmPassword])

  function validateConfirmPassword (){
    const constraints = {
      confirmPassword : {
        presence : { allowEmpty : false},
        equality : { attribute : "password" }
      }
    }
    const validPassword = validate({password, confirmPassword}, constraints)
    setConfirmPasswordError(validPassword ? validPassword.confirmPassword[0] : null)
  }

  // SUBMIT
  function submit (){
    console.log('submit')
    setSubmitStatus(true)
    validateFirstName()
    validateLastName()
    validateUserName()
    validateEmail()
    validatePhone()
    validatePassword()
    validateConfirmPassword()
  }

  return(
    <Layout header="white" page={t("sign-up.title.page")} footer={false}>
      <div id="register-mobile">
        <Container>
          <Row className="row-content">
            <Col>
              <h2 className="title">{t("sign-up.title.text")}</h2>
              <div className="wrapper-form">
                <FormGroup>
                  <Label>{t("sign-up.form.first-name.label")}</Label>
                  <Input type="text" 
                    placeholder={t("sign-up.form.first-name.placeholder")} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    invalid={firstNameError}
                  />
                  {firstNameError ? <FormFeedback>{firstNameError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.last-name.label")}</Label>
                  <Input type="text" 
                    placeholder={t("sign-up.form.last-name.placeholder")} 
                    onChange={(e) => setLastName(e.target.value)} 
                    invalid={lastNameError}
                  />
                  {lastNameError ? <FormFeedback>{lastNameError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.username.label")}</Label>
                  <Input type="text" 
                    placeholder={t("sign-up.form.username.placeholder")}
                    onChange={(e) => setUserName(e.target.value)}
                    invalid={userNameError}
                  />
                  {userNameError ? <FormFeedback>{userNameError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.email.label")}</Label>
                  <Input type="email" 
                    placeholder={t("sign-up.form.email.placeholder")}
                    onChange={(e) => setEmail(e.target.value)}
                    invalid={emailError}
                  />
                  {emailError ? <FormFeedback>{emailError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.phone.label")}</Label>
                  <Input type="text" 
                    placeholder={t("sign-up.form.phone.placeholder")}
                    onChange={(e) => setPhone(e.target.value)}
                    invalid={phoneError}
                  />
                  {phoneError ? <FormFeedback>{phoneError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.password.label")}</Label>
                  <Input type="password" 
                    placeholder={t("sign-up.form.password.placeholder")}
                    onChange={(e) => setPassword(e.target.value)}
                    invalid={passwordError}
                  />
                  {passwordError ? <FormFeedback>{passwordError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup>
                  <Label>{t("sign-up.form.re-password.label")}</Label>
                  <Input type="password" 
                    placeholder={t("sign-up.form.re-password.placeholder")}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    invalid={confirmPasswordError}
                  />
                  {confirmPasswordError ? <FormFeedback>{confirmPasswordError}</FormFeedback> : null}
                </FormGroup>
                <FormGroup className="wrapper-btn">
                  <Button className="btn-form" onClick={submit}>{t("sign-up.form.button")}</Button>
                </FormGroup>
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