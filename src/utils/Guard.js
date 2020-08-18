import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

// usage: Guard.any(<span>auth only page</span>, <span>welcome guest!</span>)
const any = (AuthComponent, GuestComponent) => connect(mapStateToProps)(props => {
  return props.auth !== null ? <AuthComponent /> : <GuestComponent />;
})

const anyShow = (AuthComponent, GuestComponent) => {
  var Any = any(AuthComponent, GuestComponent);
  return <Any />
}

const Redirect2Homepage = () => window.location = "/";
const Redirect2Login = () => window.location = "/login?redirectTo=" + encodeURIComponent(window.location.href);

const onlyGuest = (GuestComponent) => any(Redirect2Homepage, GuestComponent);
const onlyLogged = (AuthComponent) => any(AuthComponent, Redirect2Login);

export { any, anyShow, onlyGuest, onlyLogged}
