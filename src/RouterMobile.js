import React from 'react';
import { Switch, Route } from "react-router-dom";

import PageHome from 'pages/home/Mobile';

function RouterMobile (){
  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
    </Switch>
  );
}
export default RouterMobile;
