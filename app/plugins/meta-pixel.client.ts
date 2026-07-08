export default defineNuxtPlugin(() => {
  // ─── Meta Pixel ───────────────────────────────────────────────────
  const metaScript = document.createElement('script')
  metaScript.innerHTML = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '946748234567958');
    fbq('track', 'PageView');
  `
  document.head.appendChild(metaScript)

  // noscript fallback
  const noscript = document.createElement('noscript')
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=946748234567958&ev=PageView&noscript=1"/>`
  document.head.appendChild(noscript)

  // ─── Apollo Pixel ─────────────────────────────────────────────────
  const apolloScript = document.createElement('script')
  apolloScript.innerHTML = `
    function initApollo(){
      var n=Math.random().toString(36).substring(7),o=document.createElement("script");
      o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
      o.async=!0,o.defer=!0,
      o.onload=function(){window.trackingFunctions.onLoad({appId:"69b5ae7d3e758200217dba8f"})},
      document.head.appendChild(o)
    }
    initApollo();
  `
  document.head.appendChild(apolloScript)
})