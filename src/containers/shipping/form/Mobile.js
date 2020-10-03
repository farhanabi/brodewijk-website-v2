import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormGroup, Input, Label, Row, Col } from 'reactstrap';

function FormMobile ({ items }){
  const { t } = useTranslation("shipping");
  return (
    <div id="shipping-form-section-mobile">
      <div className="form-group-wrapper">
        <h5 className="title">{t("profile.title")}</h5>
        <FormGroup>
          <Label>{t("profile.form.full-name.label")}</Label>
          <Input
            type="text"
            placeholder={t("profile.form.full-name.placeholder")}
          />
        </FormGroup>
        <FormGroup>
          <Label>{t("profile.form.email.label")}</Label>
          <Input
            type="text"
            placeholder={t("profile.form.email.placeholder")}
          />
        </FormGroup>
        <FormGroup>
          <Label>{t("profile.form.phone-number.label")}</Label>
          <Input
            type="text"
            placeholder={t("profile.form.phone-number.placeholder")}
          />
        </FormGroup>
      </div>
      <div className="form-group-wrapper">
        <h5 className="title">{t("address.title")}</h5>
        <FormGroup>
          <Label>{t("address.form.address.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.address.placeholder")}
          />
        </FormGroup>
        <FormGroup>
          <Label>{t("address.form.apartment.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.apartment.placeholder")}
          />
        </FormGroup>
        <FormGroup>
          <Label>{t("address.form.city.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.city.placeholder")}
          />
        </FormGroup>
        <Row>
        <Col sm={12} lg={6}>
        <FormGroup>
          <Label>{t("address.form.province.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.province.placeholder")}
          />
        </FormGroup>
        </Col>
        <Col sm={12} lg={6}>
        <FormGroup>
          <Label>{t("address.form.postal.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.postal.placeholder")}
          />
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label>{t("address.form.country.label")}</Label>
          <Input
            type="text"
            placeholder={t("address.form.country.placeholder")}
            value="Indonesia"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default FormMobile;
