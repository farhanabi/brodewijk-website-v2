import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Desktop';
import PageBookAppointment from 'pages/bookAppointment/Desktop';
import PagePartnership from 'pages/partnership/Desktop';
import PageCustomize from 'pages/customize/Desktop';
import PageLogin from 'pages/auth/login/Desktop';
import PageRegister from 'pages/auth/register/Desktop';
import PageUser from 'pages/auth/user/Desktop';
import PageTnC from 'pages/termsAndConditions/Desktop';
import PageHelp from 'pages/help/Desktop';
import PageLink from 'pages/link/Desktop';
import PageNotFound from 'pages/notFound/Desktop';
import PagePriceList from 'pages/priceList/Desktop';
// import PageNotFound from 'pages/NotFound';

function RouterDesktop (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize" component={PageCustomize}/>
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/terms-and-conditions" component={PageTnC}/>
      <Route path="/help" component={PageHelp}/>
      <Route path="/link" component={PageLink}/>
      <Route path="/price-list" component={PagePriceList}/>
      <Route path="/login" component={PageLogin}/>
      <Route path="/register" component={PageRegister}/>
      <Route path="/user" component={PageUser}/>
      <Route path="*" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterDesktop;
