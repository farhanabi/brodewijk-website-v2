import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import * as Guard from 'utils/Guard';

import PageHome from 'pages/home/Mobile';
import PageCustomize from 'pages/customize/Mobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PagePartnership from 'pages/partnership/Mobile';
import PageTnC from 'pages/termsAndConditions/Mobile';
import PageHelp from 'pages/help/Mobile';
import PageLink from 'pages/link/Mobile';
import PageLogin from 'pages/auth/login/Mobile';
import PageRegister from 'pages/auth/register/Mobile';
import PageUser from 'pages/auth/user/Mobile';
import PageNotFound from 'pages/notFound/Mobile';
import PagePriceList from 'pages/priceList/Mobile';

function RouterMobile (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize" component={PageNotFound}/>
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/terms-and-conditions" component={PageTnC}/>
      <Route path="/help" component={PageHelp}/>
      <Route path="/link" component={PageLink}/>
      <Route path="/price-list" component={PagePriceList}/>
      <Route path="/login" component={Guard.onlyGuest(PageLogin)}/>
      <Route path="/register" component={Guard.onlyGuest(PageRegister)}/>
      <Route path="/profile" component={Guard.onlyLogged(PageUser)}/>
      <Route path="*" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterMobile;
