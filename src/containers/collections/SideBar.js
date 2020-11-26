import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


function SideBar({active}) {
  const { t } = useTranslation("collection");

  return(
		<div id="collection-sidebar">
			<h1 className="collection-title">{t("title")}</h1>
			<h2 className="categories">{t("sidebar.title")}</h2>
			<Link to="/collections/suit" className={`link ${active==='suit'&&'active'}`}><p>{t("sidebar.suit")}</p></Link>
			<Link to="/collections/shirt" className={`link ${active==='shirt'&&'active'}`}><p>{t("sidebar.shirt")}</p></Link>
			<Link to="/collections/pants" className={`link ${active==='pants'&&'active'}`}><p>{t("sidebar.pants")}</p></Link>
		</div>
	)
}

export default SideBar;
