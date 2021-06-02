(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{72:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return b}));var n=i(2),a=i(6),o=(i(0),i(76)),c=["components"],r={id:"advanced-ios",title:"iOS Advanced API",sidebar_label:"iOS"},l={unversionedId:"docs/advanced-ios",id:"docs/advanced-ios",isDocsHomePage:!1,title:"iOS Advanced API",description:"PushKit API",source:"@site/docs/docs/advanced-ios.md",slug:"/docs/advanced-ios",permalink:"/react-native-notifications/docs/advanced-ios",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/docs/advanced-ios.md",version:"current",sidebar_label:"iOS",sidebar:"docs",previous:{title:"Android Installation",permalink:"/react-native-notifications/docs/installation-android"}},s=[{value:"PushKit API",id:"pushkit-api",children:[{value:"Register to PushKit",id:"register-to-pushkit",children:[]},{value:"Listen to PushKit notifications",id:"listen-to-pushkit-notifications",children:[]}]},{value:"Interactive / Actionable Notifications",id:"interactive--actionable-notifications",children:[{value:"Example",id:"example",children:[]},{value:"<code>NotificationAction</code> Payload",id:"notificationaction-payload",children:[]},{value:"<code>NotificationCategory</code> Payload",id:"notificationcategory-payload",children:[]},{value:"<code>TextInput</code> Payload",id:"textinput-payload",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,i=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"pushkit-api"},"PushKit API"),Object(o.b)("p",null,"The PushKit framework provides the classes for your iOS apps to receive background pushes from remote servers. it has better support for background notifications compared to regular push notifications with ",Object(o.b)("inlineCode",{parentName:"p"},"content-available: 1"),". More info in ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/PushKit_Framework/"},"iOS PushKit documentation"),"."),Object(o.b)("h3",{id:"register-to-pushkit"},"Register to PushKit"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/Performance/Conceptual/EnergyGuide-iOS/OptimizeVoIP.html"},"Prepare your app to receive VoIP push notifications")),Object(o.b)("h3",{id:"listen-to-pushkit-notifications"},"Listen to PushKit notifications"),Object(o.b)("p",null,"On receiving PushKit notification, a ",Object(o.b)("inlineCode",{parentName:"p"},"pushKitNotificationReceived")," event will be fired with the notification payload."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Notifications.ios.events().registerPushKitNotificationReceived((payload: object, complete: Function) => {\n\n  console.log(JSON.stringify(payload));\n\n  // Important: This tells PushKit we are done and have shown the Incoming Call. So make sure to\n  // show the call screen before calling complete\n  complete();\n});\n")),Object(o.b)("p",null,"In your ReactNative code, add event handler for ",Object(o.b)("inlineCode",{parentName:"p"},"pushKitRegistered")," event and call to ",Object(o.b)("inlineCode",{parentName:"p"},"registerPushKit()"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"constructor() {\n  Notifications.ios.events().registerPushKitRegistered((event: RegisteredPushKit) => {\n    console.log(\"PushKit Token Received: \" + event.pushKitToken);\n  });\n  \n  Notifications.ios.events().registerPushKitNotificationReceived((payload: object, complete: Function) => {\n    console.log('PushKit notification Received: ' + JSON.stringify(payload));\n\n    complete();\n  });\n\n  // Important: This tells PushKit we are done and have shown the Incoming Call. So make sure to\n  // show the call screen before calling complete\n  Notifications.ios.registerPushKit();\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"Notice that PushKit device token and regular notifications device token are different, so you must handle two different tokens in the server side in order to support this feature."),Object(o.b)("li",{parentName:"ol"},"PushKit will not request permissions from the user for push notifications.")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"interactive--actionable-notifications"},"Interactive / Actionable Notifications"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This section provides description for iOS. For notifications customization on Android, refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-notifications/wiki/Android-Customizations#customizing-notifications-layout"},"our wiki"),"."))),Object(o.b)("p",null,"Interactive notifications allow you to reply to a message right from the notification banner or take action right from the lock screen. "),Object(o.b)("p",null,"On the Lock screen and within Notification Center, you swipe from right to left\nto reveal actions. Destructive actions, like trashing an email, are color-coded red. Relatively neutral actions, like dismissing an alert or declining an invitation, are color-coded gray."),Object(o.b)("p",null,"For banners, you pull down to reveal actions as buttons. For popups, the actions are immediately visible \u2014 the buttons are right there."),Object(o.b)("p",null,"You can find more info about interactive notifications ",Object(o.b)("a",{parentName:"p",href:"http://www.imore.com/interactive-notifications-ios-8-explained"},"here"),"."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"http://i.imgur.com/XrVzy9w.gif",alt:"Interactive Notifications"})),Object(o.b)("p",null,"Notification ",Object(o.b)("strong",{parentName:"p"},"actions")," allow the user to interact with a given notification."),Object(o.b)("p",null,"Notification ",Object(o.b)("strong",{parentName:"p"},"categories")," allow you to group multiple actions together, and to connect the actions with the push notification itself."),Object(o.b)("p",null,"Follow the basic workflow of adding interactive notifications to your app:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Config the actions."),Object(o.b)("li",{parentName:"ol"},"Group actions together into categories."),Object(o.b)("li",{parentName:"ol"},"Register to push notifications with the configured categories."),Object(o.b)("li",{parentName:"ol"},"Push a notification (or trigger a ",Object(o.b)("a",{parentName:"li",href:"#triggering-local-notifications"},"local")," one) with the configured category name.")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h4",{id:"config-the-actions"},"Config the Actions"),Object(o.b)("p",null,"We will config two actions: upvote and reply."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import { Notifications, NotificationAction, NotificationCategory } from \'react-native-notifications\';\n\nlet upvoteAction = new NotificationAction({\n  activationMode: "background",\n  title: String.fromCodePoint(0x1F44D),\n  identifier: "UPVOTE_ACTION",\n  textInput: {\n    buttonTitle: \'title\',\n    placeholder: \'placeholder text\'\n  }\n});\n\nlet replyAction = new NotificationAction({\n  activationMode: "background",\n  title: "Reply",\n  authenticationRequired: true,\n  identifier: "REPLY_ACTION"\n});\n\n')),Object(o.b)("h4",{id:"config-the-category"},"Config the Category"),Object(o.b)("p",null,"We will group ",Object(o.b)("inlineCode",{parentName:"p"},"upvote")," action and ",Object(o.b)("inlineCode",{parentName:"p"},"reply")," action into a single category: ",Object(o.b)("inlineCode",{parentName:"p"},"EXAMPLE_CATEGORY "),". If the notification contains ",Object(o.b)("inlineCode",{parentName:"p"},"EXAMPLE_CATEGORY ")," under ",Object(o.b)("inlineCode",{parentName:"p"},"category")," field, those actions will appear."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'let exampleCategory = new NotificationCategory({\n  identifier: "EXAMPLE_CATEGORY",\n  actions: [upvoteAction, replyAction]\n});\n')),Object(o.b)("h4",{id:"register-to-push-notifications"},"Register to Push Notifications"),Object(o.b)("p",null,"Instead of basic registration like we've done before, we will register the device to push notifications with the category we've just created."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Notifications.setCategories([exampleCategory]);\n")),Object(o.b)("h4",{id:"push-an-interactive-notification"},"Push an Interactive Notification"),Object(o.b)("p",null,"Notification payload should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'{\n  aps: {\n      // ... (alert, sound, badge, etc)\n      category: "EXAMPLE_CATEGORY"\n  }\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-notifications/tree/master/example"},"example app")," contains this interactive notification example, you can follow there."),Object(o.b)("h3",{id:"notificationaction-payload"},Object(o.b)("inlineCode",{parentName:"h3"},"NotificationAction")," Payload"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," - Action button title."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"identifier")," - Action identifier (must be unique)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"activationMode")," - Indicating whether the app should activate to the foreground or background.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"foreground")," (default) - Activate the app and put it in the foreground."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"background")," - Activate the app and put it in the background. If the app is already in the foreground, it remains in the foreground."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"textInput")," - ",Object(o.b)("inlineCode",{parentName:"li"},"TextInput")," payload, when supplied, the system will present text input in this action."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"destructive")," - A Boolean value indicating whether the action is destructive. When the value of this property is ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", the system displays the corresponding button differently to indicate that the action is destructive."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"authenticationRequired")," - A Boolean value indicating whether the user must unlock the device before the action is performed.")),Object(o.b)("h3",{id:"notificationcategory-payload"},Object(o.b)("inlineCode",{parentName:"h3"},"NotificationCategory")," Payload"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"identifier")," - The name of the action group (must be unique)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"actions")," - An array of ",Object(o.b)("inlineCode",{parentName:"li"},"NotificationAction")," objects, which related to this category.")),Object(o.b)("h3",{id:"textinput-payload"},Object(o.b)("inlineCode",{parentName:"h3"},"TextInput")," Payload"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"buttonTitle")," - Title of the ",Object(o.b)("inlineCode",{parentName:"li"},"send")," button."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"placeholder")," - Placeholder for the ",Object(o.b)("inlineCode",{parentName:"li"},"textInput"),".")),Object(o.b)("h4",{id:"get-and-set-application-icon-badges-count-ios-only"},"Get and set application icon badges count (iOS only)"),Object(o.b)("p",null,"Get the current number:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Notifications.ios.getBadgeCount((count) => console.log(count));\n")),Object(o.b)("p",null,"Set to specific number: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Notifications.ios.setBadgeCount(2);\n")),Object(o.b)("p",null,"Clear badges icon:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Notifications.ios.setBadgeCount(0);\n")))}b.isMDXComponent=!0},76:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return h}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(i),u=n,h=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return i?a.a.createElement(h,r(r({ref:t},s),{},{components:i})):a.a.createElement(h,r({ref:t},s))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,c=new Array(o);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var s=2;s<o;s++)c[s]=i[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);