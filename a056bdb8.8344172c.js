(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var i=n(2),o=n(6),a=(n(0),n(76)),r=n(88),c=n(89),s=["components"],l={id:"getting-started",title:"React Native Notifications Getting Started Guide",sidebar_label:"Getting Started"},d={unversionedId:"docs/getting-started",id:"docs/getting-started",isDocsHomePage:!1,title:"React Native Notifications Getting Started Guide",description:"Currently this guide is written for react-native-notifications@^3.0.0.",source:"@site/docs/docs/getting-started.md",slug:"/docs/getting-started",permalink:"/react-native-notifications/docs/getting-started",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Push Notifications Subscription",permalink:"/react-native-notifications/docs/subscription"}},u=[{value:"Add react-native-notifications to your dependencies",id:"add-react-native-notifications-to-your-dependencies",children:[]},{value:"Link native dependencies",id:"link-native-dependencies",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Register for notification events",id:"register-for-notification-events",children:[]}],p={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Currently this guide is written for ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-notifications@^3.0.0"),".",Object(a.b)("br",{parentName:"p"}),"\n","We also assume you use ",Object(a.b)("inlineCode",{parentName:"p"},"react-native@60.x.x")," and above."),Object(a.b)("p",null,"For older versions, visit this ",Object(a.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-notifications/blob/v2/docs/installation.md"},"installation guide"),"."),Object(a.b)("h2",{id:"add-react-native-notifications-to-your-dependencies"},"Add react-native-notifications to your dependencies"),Object(a.b)(r.a,{defaultValue:"npm",values:[{label:"Npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ npm install --save react-native-notifications\n"))),Object(a.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ yarn add react-native-notifications\n")))),Object(a.b)("h2",{id:"link-native-dependencies"},"Link native dependencies"),Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ pod install --project-directory=ios/\n")),Object(a.b)("p",null,"Add the following line at the top of your ",Object(a.b)("inlineCode",{parentName:"p"},"AppDelegate.m")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objectivec"},'#import "RNNotifications.h"\n')),Object(a.b)("p",null,"Start monitor notifications in ",Object(a.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [RNNotifications startMonitorNotifications]; // -> Add this line\n\n    return YES;\n}\n")),Object(a.b)("p",null,"And add the following methods to support registration to ",Object(a.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objectivec"},"- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-objectivec"},"- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];\n}\n")),Object(a.b)("h3",{id:"android"},"Android"),Object(a.b)("p",null,"For Android installation, please refer to the ",Object(a.b)("a",{parentName:"p",href:"/react-native-notifications/docs/installation-android"},"Android installation doc")," where you can find detailed step on how to start using Google's FCM service."),Object(a.b)("h2",{id:"register-for-notification-events"},"Register for notification events"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport {Notifications} from 'react-native-notifications';\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    Notifications.registerRemoteNotifications();\n\n    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {\n      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);\n      completion({alert: false, sound: false, badge: false});\n    });\n\n    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {\n      console.log(`Notification opened: ${notification.payload}`);\n      completion();\n    });\n  }\n}\n")),Object(a.b)("p",null,"Next, check out the ",Object(a.b)("a",{parentName:"p",href:"../api/general-api"},"API Reference"),"."))}f.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,b=u["".concat(r,".").concat(f)]||u[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}},82:function(e,t,n){"use strict";var i=n(0),o=Object(i.createContext)(void 0);t.a=o},83:function(e,t,n){"use strict";var i=n(0),o=n(82);t.a=function(){var e=Object(i.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},88:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(83),r=n(78),c=n(45),s=n.n(c),l=37,d=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,p=e.groupId,f=Object(a.a)(),b=f.tabGroupChoices,m=f.setTabGroupChoices,v=Object(i.useState)(c),g=v[0],O=v[1],j=Object(i.useState)(!1),y=j[0],h=j[1];if(null!=p){var N=b[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&O(N)}var w=function(e){O(e),null!=p&&m(p,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},E=function(){h(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return w(t)},onClick:function(){w(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},89:function(e,t,n){"use strict";var i=n(0),o=n.n(i);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);