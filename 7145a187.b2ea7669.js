(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(2),o=n(6),i=(n(0),n(76)),r=n(88),c=n(89),l=["components"],s={id:"installation-ios",title:"iOS Manual Installation",sidebar_label:"iOS Manual Installation"},p={unversionedId:"docs/installation-ios",id:"docs/installation-ios",isDocsHomePage:!1,title:"iOS Manual Installation",description:"In case the installation step in our Getting Started doc did not work, follow these steps.",source:"@site/docs/docs/installation-ios.md",slug:"/docs/installation-ios",permalink:"/react-native-notifications/docs/installation-ios",editUrl:"https://github.com/wix/react-native-notifications/edit/master/docs/docs/docs/installation-ios.md",version:"current",sidebar_label:"iOS Manual Installation",sidebar:"docs",previous:{title:"Local Notifications",permalink:"/react-native-notifications/docs/localNotifications"},next:{title:"Android Installation",permalink:"/react-native-notifications/docs/installation-android"}},d=[{value:"Installation with CocoaPods",id:"installation-with-cocoapods",children:[]}],u={rightToc:d};function m(e){var t=e.components,n=Object(o.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In case the installation step in our ",Object(i.b)("a",{parentName:"p",href:"/react-native-notifications/docs/getting-started"},"Getting Started")," doc did not work, follow these steps."),Object(i.b)("p",null,"Start by running this:"),Object(i.b)(r.a,{defaultValue:"npm",values:[{label:"Npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ npm install --save react-native-notifications\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ yarn add react-native-notifications\n")))),Object(i.b)("h3",{id:"installation-with-cocoapods"},"Installation with CocoaPods"),Object(i.b)("p",null,"Projects generated using newer versions of react-native use CocoaPods by default. In that case it's easier to install react-native-navigation using CocoaPods."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add the following to ",Object(i.b)("inlineCode",{parentName:"li"},"Podfile"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="./ios/Podfile"',title:'"./ios/Podfile"'},"platform :ios, '9.0'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'YourApp' do\n  # Pods for YourApp\n  pod 'React', :path => '../node_modules/react-native/'\n  pod 'React-Core', :path => '../node_modules/react-native/React'\n  pod 'React-DevSupport', :path => '../node_modules/react-native/React'\n  pod 'React-fishhook', :path => '../node_modules/react-native/Libraries/fishhook'\n  pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'\n  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'\n  pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'\n  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'\n  pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'\n  pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'\n  pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'\n  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'\n  pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'\n  pod 'React-RCTWebSocket', :path => '../node_modules/react-native/Libraries/WebSocket'\n\n  pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'\n  pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'\n  pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'\n  pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'\n  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'\n\n  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'\n  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'\n  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'\n\n+ pod 'react-native-notifications', :podspec => '../node_modules/react-native-notifications/react-native-notifications.podspec'\n\n  use_native_modules!\nend\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd ios && pod install"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add the following line at the top of your ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate.m")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'},'#import "RNNotifications.h"\n')),Object(i.b)("p",null,"Start monitor notifications in: ",Object(i.b)("inlineCode",{parentName:"p"},"application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [RNNotifications startMonitorNotifications]; // -> Add this line\n\n    return YES;\n}\n")),Object(i.b)("p",null,"And add the following methods to support registration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-objectivec",metastring:'title="./ios/{project_name}/AppDelegate.m"',title:'"./ios/{project_name}/AppDelegate.m"'},"- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];\n}\n\n")))}m.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},82:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},83:function(e,t,n){"use strict";var a=n(0),o=n(82);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},88:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(83),r=n(78),c=n(45),l=n.n(c),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,d=e.values,u=e.groupId,m=Object(i.a)(),b=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),h=v[0],g=v[1],O=Object(a.useState)(!1),j=O[0],y=O[1];if(null!=u){var N=b[u];null!=N&&N!==h&&d.some((function(e){return e.value===N}))&&g(N)}var R=function(e){g(e),null!=u&&f(u,e)},w=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},_=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",_)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),C(e)},onFocus:function(){return R(t)},onClick:function(){R(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},89:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);