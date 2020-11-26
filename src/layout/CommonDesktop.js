import React from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/commons/Header/Desktop'
import Footer from 'containers/commons/Footer'
import { withRouter } from 'react-router-dom'
import { Helmet } from "react-helmet";

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

const CommonLayout = (props) => {
  const { header, page, footer } = props;
  const pageTitle = toTitleCase(page);

  return (
    <div>
      <Helmet
        defaultTitle="Brodewijk - Gentlemen's Custom Wear"
        titleTemplate="%s | Brodewijk - Gentlemen's Custom Wear"
      >
        {(page!='Home') && page && <title>{pageTitle}</title>}
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon-196.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Gentlemen's Custom Wear. Buat jas, blazer, kemeja, dan celana sesuai dengan keinginan sendiri di Brodewijk."
        />
        <meta name="keywords" content="Baju Formal, Bandung, Bikin Jas, Kemeja, Celana, Blazer" />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content="Gentlemen's Custom Wear. Buat jas, blazer, kemeja, dan celana sesuai dengan keinginan sendiri di Brodewijk." />
        <meta name="og:type" content="website" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="Summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Gentlemen's Custom Wear. Buat jas, blazer, kemeja, dan celana sesuai dengan keinginan sendiri di Brodewijk." />
        <meta name="twitter:image" content="/favicon-196.png" />

        {/* <!-- generics --> */}
        <link rel="icon" href="/favicon-32.png" sizes="32x32"/>
        <link rel="icon" href="/favicon-128.png" sizes="128x128"/>
        <link rel="icon" href="/favicon-192.png" sizes="192x192"/>

        {/* <!-- Android --> */}
        <link rel="shortcut icon" sizes="196x196" href="/favicon-196.png"/>

        {/* <!-- iOS --> */}
        <link rel="apple-touch-icon" href="/favicon-152.png" sizes="152x152"/>
        <link rel="apple-touch-icon" href="/favicon-180.png" sizes="180x180"/>

        <link rel="manifest" href="/manifest.json" />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175670833-1"/>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175670833-1');
        `}</script>

        {/* <!-- Facebook Pixel Code --> */}
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1844940835638001');
          fbq('track', 'PageView');
        `}</script>
        <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1844940835638001&ev=PageView&noscript=1"/>`}</noscript>
        {/* <!-- End Facebook Pixel Code --> */}

        {/* <!-- Hotjar Tracking Code for www.brodewijk.com --> */}
        <script>{`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2040055,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}</script>

      </Helmet>
      {header === "white" ? (<Header white />) : (<Header/>)}
      {props.children}
      {footer && (<Footer/>)}
    </div>
  )
}

CommonLayout.defaultProps = {
  builtInNav: true,
};
CommonLayout.propTypes = {
  builtInNav: PropTypes.bool,
};

export default withRouter(CommonLayout)

