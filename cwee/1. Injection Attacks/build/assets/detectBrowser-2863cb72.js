(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c33478bf-aa86-4033-8a3a-ac097d9a8c27",e._sentryDebugIdIdentifier="sentry-dbid-c33478bf-aa86-4033-8a3a-ac097d9a8c27")}catch{}})();window.detectBrowser=function(){let e=navigator.userAgent,n=e.indexOf("Chrome")>-1,t=window.navigator.userAgent.indexOf("Edg")>-1,a=e.indexOf("Firefox")>-1,f=e.indexOf("Safari")>-1;n&&f&&(f=!1);let r=e.indexOf("OP")>-1;return n&&r&&(n=!1),n&&t&&(n=!1),{safari:f,chrome:n,microsoft_edge:t,opera:r,firefox:a}};