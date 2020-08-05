import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Mobile';
import PageCustomize from 'pages/customize/Mobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PagePartnership from 'pages/partnership/Mobile';
import PageNotFound from 'pages/notFound/Mobile';
import PageTnC from 'pages/termsAndConditions/Mobile';
import PageHelp from 'pages/help/Mobile';
import PageLink from 'pages/link/Mobile';

function RouterMobile (){
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
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterMobile;
