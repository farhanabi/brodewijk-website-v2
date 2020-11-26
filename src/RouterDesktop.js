import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import * as Guard from 'utils/Guard';

import PageHome from 'pages/home/Desktop';
import PageCustomizeSuit from 'pages/customize/Desktop';
import PageCart from 'pages/cart/Desktop';
import PageShipping from 'pages/shipping/Desktop';
import PageBookAppointment from 'pages/bookAppointment/Desktop';
import PagePartnership from 'pages/partnership/Desktop';
import PageLogin from 'pages/auth/login/Desktop';
import PageRegister from 'pages/auth/register/Desktop';
import PageUser from 'pages/auth/user/Desktop';
import PageCollectionsSuit from 'pages/collections/suit/Desktop';
import PageCollectionsShirt from 'pages/collections/shirt/Desktop';
import PageCollectionsPants from 'pages/collections/pants/Desktop';
import PageTnC from 'pages/termsAndConditions/Desktop';
import PagePrivacy from 'pages/privacyPolicy/Desktop';
import PageHelp from 'pages/help/Desktop';
import PageSizeGuide from 'pages/sizeGuide/Desktop';
import PageAbout from 'pages/about/Desktop';
import PageContact from 'pages/contact/Desktop';
import PageLink from 'pages/link/Desktop';
import PageNotFound from 'pages/notFound/Desktop';
import PagePriceList from 'pages/priceList/Desktop';

function RouterDesktop (){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Switch>
      <Route exact={true} path="/" component={PageHome}/>
      <Route path="/customize/suit" component={PageCustomizeSuit}/>
      <Route exact path="/customize" component={PageCustomizeSuit}>
        <Redirect to="/customize/suit" />
      </Route>
      {/* <Route path="/cart" component={Guard.onlyLogged(PageCart)}/> */}
      {/* <Route path="/shipping" component={Guard.onlyLogged(PageShipping)}/> */}
      <Route path="/login" component={Guard.onlyGuest(PageLogin)}/>
      <Route path="/register" component={Guard.onlyGuest(PageRegister)}/>
      <Route path="/profile" component={Guard.onlyLogged(PageUser)}/>
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
      <Route path="*" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
export default RouterDesktop;
