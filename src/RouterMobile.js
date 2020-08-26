import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import * as Guard from 'utils/Guard';

import PageHome from 'pages/home/Mobile';
import PageCustomize from 'pages/customize/Mobile';
import PageCart from 'pages/cart/Mobile';
import PageMeasure from 'pages/MeasureMobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PagePartnership from 'pages/partnership/Mobile';
import PageTnC from 'pages/termsAndConditions/Mobile';
import PageHelp from 'pages/help/Mobile';
import PageLink from 'pages/link/Mobile';
import PageLogin from 'pages/auth/login/Mobile';
import PageRegister from 'pages/auth/register/Mobile';
import PageNotFound from 'pages/notFound/Mobile';
// import PageNotFound from 'pages/NotFound';

function RouterMobile (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize" component={PageCustomize}/>
      <Route path="/cart" component={Guard.onlyLogged(PageCart)}/>
      <Route path="/measure/:id" component={Guard.onlyLogged(PageMeasure)}/>
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/terms-and-conditions" component={PageTnC}/>
      <Route path="/help" component={PageHelp}/>
      <Route path="/link" component={PageLink}/>
      <Route path="/login" component={Guard.onlyGuest(PageLogin)}/>
      <Route path="/register" component={Guard.onlyGuest(PageRegister)}/>
      <Route component={PageNotFound} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
export default RouterMobile;
