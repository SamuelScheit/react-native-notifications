(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return r})),i.d(t,"default",(function(){return d}));var n=i(2),o=i(6),a=(i(0),i(76)),c={id:"localNotifications",title:"Local Notifications",sidebar_label:"Local Notifications"},l={unversionedId:"docs/localNotifications",id:"docs/localNotifications",isDocsHomePage:!1,title:"Local Notifications",description:"iOS",source:"@site/docs/docs/localNotifications.md",slug:"/docs/localNotifications",permalink:"/react-native-notifications/docs/localNotifications",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/docs/localNotifications.md",version:"current",sidebar_label:"Local Notifications",sidebar:"docs",previous:{title:"Handling Notification Events",permalink:"/react-native-notifications/docs/notifications-events"},next:{title:"iOS Manual Installation",permalink:"/react-native-notifications/docs/installation-ios"}},r=[{value:"Cancel Scheduled Local Notifications",id:"cancel-scheduled-local-notifications",children:[]}],s={rightToc:r};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png",width:30})," iOS",Object(a.b)("p",null,"You can manually trigger local notifications in your JS code, to be posted immediately or in the future.\nTriggering local notifications is fully compatible with React Native ",Object(a.b)("inlineCode",{parentName:"p"},"PushNotificationsIOS")," library."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'let localNotification = Notifications.postLocalNotification({\n    body: "Local notification!",\n    title: "Local Notification Title",\n    sound: "chime.aiff",\n    silent: false,\n    category: "SOME_CATEGORY",\n    userInfo: { }\n});\n')),Object(a.b)("p",null,"Notification object contains:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"strong"},"fireDate")),"- The date and time when the system should deliver the notification (optinal - default is immediate dispatch)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"body"),"- The message displayed in the notification alert."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title"),"- The title of the notification, displayed in the notifications center."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"alertAction"),'- The "action" displayed beneath an actionable notification on the lockscreen (e.g. "Slide to ',Object(a.b)("strong",{parentName:"li"},"open"),'"). Note that Apple no longer shows this in iOS 10.'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sound"),"- The sound played when the notification is fired (optional -- will play default sound if unspecified). This must be the filename of a sound included in the application bundle; the sound must be 30 seconds or less and should be encoded with linear PCM or IMA4."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"silent"),"- Whether the notification sound should be suppressed (optional)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"category"),"- The category of this notification, required for ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#interactive--actionable-notifications-ios-only"}),"interactive notifications")," (optional)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"userInfo"),"- An optional object containing additional notification data.")),Object(a.b)("h3",{id:"cancel-scheduled-local-notifications"},"Cancel Scheduled Local Notifications"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Notifications.postLocalNotification()")," method return unique ",Object(a.b)("inlineCode",{parentName:"p"},"notificationId")," values, which can be used in order to cancel specific local notifications that were scheduled for delivery on ",Object(a.b)("inlineCode",{parentName:"p"},"fireDate")," and have not yet been delivered. You can cancel local notification by calling ",Object(a.b)("inlineCode",{parentName:"p"},"Notifications.cancelLocalNotification(notificationId)"),"."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'let someLocalNotification = Notifications.postLocalNotification({\n    body: "Local notification!",\n    title: "Local Notification Title",\n    sound: "chime.aiff",\n    category: "SOME_CATEGORY",\n    userInfo: { }\n});\n\nNotifications.cancelLocalNotification(someLocalNotification);\n')),Object(a.b)("p",null,"To cancel all local notifications (",Object(a.b)("strong",{parentName:"p"},"iOS only!"),"), use ",Object(a.b)("inlineCode",{parentName:"p"},"cancelAllLocalNotifications()"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"Notifications.ios.cancelAllLocalNotifications();\n")),Object(a.b)("h4",{id:"cancel-delivered-local-notifications-ios-10-only"},"Cancel Delivered Local Notifications (iOS 10+ only)"),Object(a.b)("p",null,"To dismiss notifications from the notification center that have already been shown to the user, call ",Object(a.b)("inlineCode",{parentName:"p"},"Notifications.ios.removeDeliveredNotifications([notificationId])"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"let someLocalNotification = Notifications.postLocalNotification({...});\n\nNotifications.ios.removeDeliveredNotifications([someLocalNotification]);\n")),Object(a.b)("p",null,"Call ",Object(a.b)("inlineCode",{parentName:"p"},"removeAllDeliveredNotifications()")," to dismiss all delivered notifications\n(note that this will dismiss push notifications in addition to local\nnotifications)."),Object(a.b)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png",width:30})," Android",Object(a.b)("p",null,"Much like on iOS, notifications can be triggered locally. The API to do so is a simplified version of the iOS equivalent that works more natually with the Android perception of push (remote) notifications:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'Notifications.postLocalNotification({\n    title: "Local notification",\n    body: "This notification was generated by the app!",\n    extra: "data"\n});\n')),Object(a.b)("p",null,"Upon notification opening (tapping by the device user), all data fields will be delivered as-is). Note that scheduled notifications are not yet implemented on Android. See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix/react-native-notifications/issues/484"}),"Issue 484"),"."))}d.isMDXComponent=!0},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return u}));var n=i(0),o=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(i),f=n,u=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return i?o.a.createElement(u,l(l({ref:t},s),{},{components:i})):o.a.createElement(u,l({ref:t},s))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,c=new Array(a);c[0]=f;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=i[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,i)}f.displayName="MDXCreateElement"}}]);