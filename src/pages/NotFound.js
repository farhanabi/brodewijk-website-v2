import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function NotFound (){
  const { t } = useTranslation("translation");
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>{t("not-found.sorry")}</p>
      <Link to="/">
        <Button className="btn-outline-black all">{t("not-found.link-home")}</Button>
      </Link>
    </div>
  );
}

export default NotFound;