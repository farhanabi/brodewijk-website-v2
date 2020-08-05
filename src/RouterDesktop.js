import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Desktop';
import PageBookAppointment from 'pages/bookAppointment/Desktop';
import PageCustomize from 'pages/customize/Desktop';
import PageLogin from 'pages/auth/login/Desktop';
import PageRegister from 'pages/auth/register/Desktop';
import PageNotFound from 'pages/NotFound';

function RouterDesktop (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/customize" component={PageCustomize}/>
      <Route path="/login" component={PageLogin}/>
      <Route path="/register" component={PageRegister}/>
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
export default RouterDesktop;
