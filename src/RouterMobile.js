import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import * as Guard from 'utils/Guard';

import PageHome from 'pages/home/Mobile';
import PageCustomizeSuit from 'pages/customize/Mobile';
import PageCart from 'pages/cart/Mobile';
import PageShipping from 'pages/shipping/Mobile';
import PageMeasure from 'pages/MeasureMobile';
import PageBookAppointment from 'pages/bookAppointment/Mobile';
import PagePartnership from 'pages/partnership/Mobile';
import PageLogin from 'pages/auth/login/Mobile';
import PageRegister from 'pages/auth/register/Mobile';
import PageUser from 'pages/auth/user/Mobile';
import PageCollectionsSuit from 'pages/collections/suit/Mobile';
import PageCollectionsShirt from 'pages/collections/shirt/Mobile';
import PageCollectionsPants from 'pages/collections/pants/Mobile';
import PageTnC from 'pages/termsAndConditions/Mobile';
import PagePrivacy from 'pages/privacyPolicy/Mobile';
import PageHelp from 'pages/help/Mobile';
import PageSizeGuide from 'pages/sizeGuide/Mobile';
import PageAbout from 'pages/about/Mobile';
import PageContact from 'pages/contact/Mobile';
import PageLink from 'pages/link/Mobile';
import PageNotFound from 'pages/notFound/Mobile';
import PagePriceList from 'pages/priceList/Mobile';

function RouterMobile (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize/suit" component={PageCustomizeSuit}/>
      <Route path="/customize" component={PageCustomizeSuit}>
        <Redirect to="/customize/suit" />
      </Route>
      {/* <Route path="/cart" component={Guard.onlyLogged(PageCart)}/> */}
      {/* <Route path="/measure/:id" component={Guard.onlyLogged(PageMeasure)}/> */}
      {/* <Route path="/shipping" component={Guard.onlyLogged(PageShipping)}/> */}
      <Route path="/partnership" component={PagePartnership}/>
      <Route path="/collections/suit" component={PageCollectionsSuit}/>
      <Route path="/collections/shirt" component={PageCollectionsShirt}/>
      <Route path="/collections/pants" component={PageCollectionsPants}/>
      <Route exact path="/collections" component={PageCollectionsPants}>
        <Redirect to="/collections/suit" />
      </Route>
      <Route path="/book-appointment" component={PageBookAppointment}/>
      <Route path="/terms-and-conditions" component={PageTnC}/>
      <Route path="/privacy-policy" component={PagePrivacy}/>
      <Route path="/help" component={PageHelp}/>
      <Route path="/size-guide" component={PageSizeGuide}/>
      <Route path="/about" component={PageAbout}/>
      <Route path="/contact" component={PageContact}/>
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
