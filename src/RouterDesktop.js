import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Desktop';
import PageBookAppointment from 'pages/bookAppointment/Desktop';
import PagePartnership from 'pages/partnership/Desktop';
import PageNotFound from 'pages/notFound/Desktop';

function RouterDesktop (){
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
export default RouterDesktop;
