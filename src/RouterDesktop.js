import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import * as Guard from 'utils/Guard';

import PageHome from 'pages/home/Desktop';
import PageBookAppointment from 'pages/bookAppointment/Desktop';
import PagePartnership from 'pages/partnership/Desktop';
import PageCustomize from 'pages/customize/Desktop';
import PageCart from 'pages/cart/Desktop';
import PageLogin from 'pages/auth/login/Desktop';
import PageRegister from 'pages/auth/register/Desktop';
import PageTnC from 'pages/termsAndConditions/Desktop';
import PageHelp from 'pages/help/Desktop';
import PageLink from 'pages/link/Desktop';
import PageNotFound from 'pages/notFound/Desktop';
// import PageNotFound from 'pages/NotFound';

function RouterDesktop (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize" component={PageCustomize}/>
      <Route path="/cart" component={Guard.onlyLogged(PageCart)}/>
      <Route path="/login" component={Guard.onlyGuest(PageLogin)}/>
      <Route path="/register" component={Guard.onlyGuest(PageRegister)}/>
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/terms-and-conditions" component={PageTnC}/>
      <Route path="/help" component={PageHelp}/>
      <Route path="/link" component={PageLink}/>
      <Route path="*" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterDesktop;
