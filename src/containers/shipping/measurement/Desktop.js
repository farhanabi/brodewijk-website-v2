import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { Row, Col, Button, TabContent, TabPane, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

function Measurement(props) {
  const { t } = useTranslation("measurement");
  const [fit, setFit] = useState('regular');
  const [method, setMethod] = useState('standard');
  const [standardSize, setStandardSize] = useState('M');

  function toggleFit(v) {
    if (fit !== v) setFit(v);
  }

  function toggleMethod(v) {
    if (method !== v) setMethod(v);
  }

  function toggleStandardSize(v) {
    if (standardSize !== v) setStandardSize(v);
  }

  const initValues = {
    height: "",
    weight: "",
    frontLength: "",
    shoulderWidth: "",
    sleeveLength: "",
    chest: "",
    waist: "",
    hips: "",
    armpits: "",
    biceps: "",
    wrist: "",
    frontChest: "",
    backChest: ""
  }

  const validationSchema = yup.object({
    height: yup.string()
      .required(`${t("custom-measurement.body-measurement.height")} ${t("custom-measurement.is-required")}`),
    weight: yup.string()
      .required(`${t("custom-measurement.body-measurement.weight")} ${t("custom-measurement.is-required")}`),
    frontLength: yup.string()
      .required(`${t("custom-measurement.upper-measurement.front-length")} ${t("custom-measurement.is-required")}`),
    shoulderWidth: yup.string()
      .required(`${t("custom-measurement.upper-measurement.shoulder-width")} ${t("custom-measurement.is-required")}`),
    sleeveLength: yup.string()
      .required(`${t("custom-measurement.upper-measurement.sleeve-length")} ${t("custom-measurement.is-required")}`),
    chest: yup.string()
      .required(`${t("custom-measurement.upper-measurement.chest")} ${t("custom-measurement.is-required")}`),
    waist: yup.string()
      .required(`${t("custom-measurement.upper-measurement.waist")} ${t("custom-measurement.is-required")}`),
    hips: yup.string()
      .required(`${t("custom-measurement.upper-measurement.hips")} ${t("custom-measurement.is-required")}`),
    armpits: yup.string()
      .required(`${t("custom-measurement.upper-measurement.armpits")} ${t("custom-measurement.is-required")}`),
    biceps: yup.string()
      .required(`${t("custom-measurement.upper-measurement.biceps")} ${t("custom-measurement.is-required")}`),
    wrist: yup.string()
      .required(`${t("custom-measurement.upper-measurement.wrist")} ${t("custom-measurement.is-required")}`),
    frontChest: yup.string()
      .required(`${t("custom-measurement.upper-measurement.front-chest")} ${t("custom-measurement.is-required")}`),
    backChest: yup.string()
      .required(`${t("custom-measurement.upper-measurement.back-chest")} ${t("custom-measurement.is-required")}`),
  });

  const submit = (values) => {
    console.log('submit')
  }

  return (
    <div className="measure-desktop">
      <Row className="wrapper-btn-close">
        <Button className="btn-outline-black" onClick={props.toggle}><i className="fas fa-times"/></Button>
      </Row>
      {method === "custom" && (
        <a href="#" className="link-guide">{t("measuring-guide")}</a>
      )}
      <h5 className="title">{t("title")}</h5>

      {/* fit */}
      <Row className="fit">
        <p className="option">{t("fit-option.label")}</p>
        <Button
          className={`btn-tab ${classnames({ active: fit === 'regular' })}`}
          onClick={() => toggleFit('regular')}
        >
          {t("fit-option.regular-fit")}
        </Button>
        <Button
          className={`btn-tab ${classnames({ active: fit === 'slim' })}`}
          onClick={() => toggleFit('slim')}
        >
          {t("fit-option.slim-fit")}
        </Button>
      </Row>

      {/* method */}
      <Row className="method">
        <p className="option">{t("method-option.label")}</p>
        <Button
          className={`btn-tab ${classnames({ active: method === 'standard' })}`}
          onClick={() => toggleMethod('standard')}
        >
          {t("method-option.standard")}
        </Button>
        <Button
          className={`btn-tab ${classnames({ active: method === 'custom' })}`}
          onClick={() => toggleMethod('custom')}
        >
          {t("method-option.custom")}
        </Button>
      </Row>
      <TabContent activeTab={method}>
        {/* standard method */}
        <TabPane tabId="standard" className="standard">
          <Row className="method">
            <Button
              className={`btn-tab standard-size ${classnames({ active: standardSize === 'S' })}`}
              onClick={() => toggleStandardSize('S')}
            >S</Button>
            <Button
              className={`btn-tab standard-size ${classnames({ active: standardSize === 'M' })}`}
              onClick={() => toggleStandardSize('M')}
            >M</Button>
            <Button
              className={`btn-tab standard-size ${classnames({ active: standardSize === 'L' })}`}
              onClick={() => toggleStandardSize('L')}
            >L</Button>
            <Button
              className={`btn-tab standard-size ${classnames({ active: standardSize === 'XL' })}`}
              onClick={() => toggleStandardSize('XL')}
            >XL</Button>
            <Button
              className={`btn-tab standard-size ${classnames({ active: standardSize === 'XXL' })}`}
              onClick={() => toggleStandardSize('XXL')}
            >XXL</Button>
          </Row>
        </TabPane>
        {/* custom method */}
        <TabPane tabId="custom" className="custom">
          <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              if(method === "custom") {
                submit(values)
              }
            }}
          >
          {formik => {
            const { handleChange, handleBlur, values, touched, errors, handleSubmit } = formik;
            return (
              <>
                <h5 className="subtitle center">{t("custom-measurement.body-measurement.title")}</h5>
                <Row>
                  <Col md={{ size: 3, offset: 3}} xs={6}>
                    <FormGroup>
                      <Label>{t("custom-measurement.body-measurement.height")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("height")}
                        onBlur={handleBlur("height")}
                        value={values.height}
                        invalid={(touched.height && errors.height)}
                      />
                      {touched.height && errors.height && (<FormFeedback>{errors.height}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={6} md={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.body-measurement.weight")}</Label>
                      <Input type="text" placeholder="kg"
                        onChange={handleChange("weight")}
                        onBlur={handleBlur("weight")}
                        value={values.weight}
                        invalid={(touched.weight && errors.weight)}
                      />
                      {touched.weight && errors.weight && (<FormFeedback>{errors.weight}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                </Row>
                <h5 className="subtitle">{t("custom-measurement.upper-measurement.title")}</h5>
                <Row>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.front-length")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("frontLength")}
                        onBlur={handleBlur("frontLength")}
                        value={values.frontLength}
                        invalid={(touched.frontLength && errors.frontLength)}
                      />
                      {touched.frontLength && errors.frontLength && (<FormFeedback>{errors.frontLength}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.shoulder-width")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("shoulderWidth")}
                        onBlur={handleBlur("shoulderWidth")}
                        value={values.shoulderWidth}
                        invalid={(touched.shoulderWidth && errors.shoulderWidth)}
                      />
                      {touched.shoulderWidth && errors.shoulderWidth && (<FormFeedback>{errors.shoulderWidth}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.sleeve-length")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("sleeveLength")}
                        onBlur={handleBlur("sleeveLength")}
                        value={values.sleeveLength}
                        invalid={(touched.sleeveLength && errors.sleeveLength)}
                      />
                      {touched.sleeveLength && errors.sleeveLength && (<FormFeedback>{errors.sleeveLength}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.chest")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("chest")}
                        onBlur={handleBlur("chest")}
                        value={values.chest}
                        invalid={(touched.chest && errors.chest)}
                      />
                      {touched.chest && errors.chest && (<FormFeedback>{errors.chest}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.waist")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("waist")}
                        onBlur={handleBlur("waist")}
                        value={values.waist}
                        invalid={(touched.waist && errors.waist)}
                      />
                      {touched.waist && errors.waist && (<FormFeedback>{errors.waist}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.hips")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("hips")}
                        onBlur={handleBlur("hips")}
                        value={values.hips}
                        invalid={(touched.hips && errors.hips)}
                      />
                      {touched.hips && errors.hips && (<FormFeedback>{errors.hips}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.armpits")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("armpits")}
                        onBlur={handleBlur("armpits")}
                        value={values.armpits}
                        invalid={(touched.armpits && errors.armpits)}
                      />
                      {touched.armpits && errors.armpits && (<FormFeedback>{errors.armpits}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.biceps")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("biceps")}
                        onBlur={handleBlur("biceps")}
                        value={values.biceps}
                        invalid={(touched.biceps && errors.biceps)}
                      />
                      {touched.biceps && errors.biceps && (<FormFeedback>{errors.biceps}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.wrist")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("wrist")}
                        onBlur={handleBlur("wrist")}
                        value={values.wrist}
                        invalid={(touched.wrist && errors.wrist)}
                      />
                      {touched.wrist && errors.wrist && (<FormFeedback>{errors.wrist}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.front-chest")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("frontChest")}
                        onBlur={handleBlur("frontChest")}
                        value={values.frontChest}
                        invalid={(touched.frontChest && errors.frontChest)}
                      />
                      {touched.frontChest && errors.frontChest && (<FormFeedback>{errors.frontChest}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                  <Col xs={3}>
                    <FormGroup>
                      <Label>{t("custom-measurement.upper-measurement.back-chest")}</Label>
                      <Input type="text" placeholder="cm"
                        onChange={handleChange("backChest")}
                        onBlur={handleBlur("backChest")}
                        value={values.backChest}
                        invalid={(touched.backChest && errors.backChest)}
                      />
                      {touched.backChest && errors.backChest && (<FormFeedback>{errors.backChest}</FormFeedback>)}
                    </FormGroup>
                  </Col>
                </Row>
                {method === "custom" && (
                  <div className="wrapper-btn-save">
                    <Button className="btn-save" onClick={handleSubmit}>{t("save-button")}</Button>
                  </div>
                )}
              </>
            )}}
          </Formik>
        </TabPane>
      </TabContent>

      {method === "standard" && (
        <div className="wrapper-btn-save">
          <Button className="btn-save">{t("save-button")}</Button>
        </div>
      )}
    </div>
  );
}

export default Measurement;