import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Mobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PagePartnership from 'pages/partnership/Mobile';
import PageNotFound from 'pages/notFound/Mobile';

function RouterMobile (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterMobile;
