(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(2),r=i(6),a=(i(0),i(76)),o={id:"ios-api",title:"iOS Specific Commands",sidebar_label:"iOS specific"},c={unversionedId:"api/ios-api",id:"api/ios-api",isDocsHomePage:!1,title:"iOS Specific Commands",description:"requestPermissions()",source:"@site/docs/api/ios-api.md",slug:"/api/ios-api",permalink:"/react-native-notifications/api/ios-api",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/api/ios-api.md",version:"current",sidebar_label:"iOS specific",sidebar:"api",previous:{title:"General Commands",permalink:"/react-native-notifications/api/general-api"},next:{title:"General",permalink:"/react-native-notifications/api/general-events"}},s=[{value:"requestPermissions()",id:"requestpermissions",children:[]},{value:"checkPermissions()",id:"checkpermissions",children:[]},{value:"abandonPermissions()",id:"abandonpermissions",children:[]},{value:"registerPushKit()",id:"registerpushkit",children:[]},{value:"cancelAllLocalNotifications()",id:"cancelalllocalnotifications",children:[]},{value:"getDeliveredNotifications()",id:"getdeliverednotifications",children:[]},{value:"removeDeliveredNotifications()",id:"removedeliverednotifications",children:[]},{value:"getBadgeCount()",id:"getbadgecount",children:[]},{value:"setBadgeCount()",id:"setbadgecount",children:[]}],l={rightToc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"requestpermissions"},"requestPermissions()"),Object(a.b)("p",null,"Requests notification permissions from iOS, prompting the user's dialog box."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.requestPermissions();\n")),Object(a.b)("h2",{id:"checkpermissions"},"checkPermissions()"),Object(a.b)("p",null,"See what push permissions are currently enabled."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.checkPermissions();\n")),Object(a.b)("h2",{id:"abandonpermissions"},"abandonPermissions()"),Object(a.b)("p",null,"Unregister for all remote notifications received via Apple Push Notification service."),Object(a.b)("p",null,"You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.abandonPermissions();\n")),Object(a.b)("h2",{id:"registerpushkit"},"registerPushKit()"),Object(a.b)("p",null,"Register for PushKit notifications"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.registerPushKit();\n")),Object(a.b)("h2",{id:"cancelalllocalnotifications"},"cancelAllLocalNotifications()"),Object(a.b)("p",null,"Cancels all scheduled localNotifications"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.cancelAllLocalNotifications();\n")),Object(a.b)("h2",{id:"getdeliverednotifications"},"getDeliveredNotifications()"),Object(a.b)("p",null,"Provides you with a list of the app\u2019s notifications that are still displayed in Notification Center"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.getDeliveredNotifications();\n")),Object(a.b)("h2",{id:"removedeliverednotifications"},"removeDeliveredNotifications()"),Object(a.b)("p",null,"Removes the specified notifications from Notification Center"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.removeDeliveredNotifications(identifiers);\n")),Object(a.b)("h2",{id:"getbadgecount"},"getBadgeCount()"),Object(a.b)("p",null,"Gets the badge count number from the aps object"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.getBadgeCount();\n")),Object(a.b)("h2",{id:"setbadgecount"},"setBadgeCount()"),Object(a.b)("p",null,"Sets the badge number for the app icon on the home screen"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Notifications.ios.setBadgeCount(1);\n")))}p.isMDXComponent=!0},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return f}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(i),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return i?r.a.createElement(f,c(c({ref:t},l),{},{components:i})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);