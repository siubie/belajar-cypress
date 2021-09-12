"use strict";(self.webpackChunkcypress=self.webpackChunkcypress||[]).push([[7751],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:s,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9250:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),o=["components"],u={sidebar_position:1},a="Default Structure",l={unversionedId:"struktur-folder/default-structure",id:"struktur-folder/default-structure",isDocsHomePage:!1,title:"Default Structure",description:"Struktur folder default dari cypres adalah :",source:"@site/docs/03-struktur-folder/01-default-structure.md",sourceDirName:"03-struktur-folder",slug:"/struktur-folder/default-structure",permalink:"/belajar-cypress/docs/struktur-folder/default-structure",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/03-struktur-folder/01-default-structure.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"plugin",permalink:"/belajar-cypress/docs/setup-vscode/plugin"},next:{title:"Basic Testing",permalink:"/belajar-cypress/docs/basic-testing/basic-testing"}},c=[{value:"Test file",id:"test-file",children:[]},{value:"Fixture",id:"fixture",children:[]},{value:"Assets File",id:"assets-file",children:[{value:"Downloads",id:"downloads",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Video",id:"video",children:[]}]},{value:"Plugins",id:"plugins",children:[]},{value:"Support",id:"support",children:[]}],d={toc:c};function p(e){var t=e.components,u=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"default-structure"},"Default Structure"),(0,i.kt)("p",null,"Struktur folder default dari cypres adalah :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"plugin",src:r(5162).Z})),(0,i.kt)("h2",{id:"test-file"},"Test file"),(0,i.kt)("p",null,"Test spec ditaroh di folder cypress/integration"),(0,i.kt)("h2",{id:"fixture"},"Fixture"),(0,i.kt)("p",null,"Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory."),(0,i.kt)("h2",{id:"assets-file"},"Assets File"),(0,i.kt)("p",null,"There are some folders that may be generated after a test run, containing assets that were generated during the test run."),(0,i.kt)("p",null,"You may consider adding these folders to your ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file to ignore\nchecking these files into source control."),(0,i.kt)("h3",{id:"downloads"},"Downloads"),(0,i.kt)("p",null,"Any files downloaded while testing an application's file download feature will be stored in the downloads Folder which is set to cypress/downloads by default."),(0,i.kt)("h3",{id:"screenshots"},"Screenshots"),(0,i.kt)("p",null,"If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshots Folder which is set to cypress/screenshots by default."),(0,i.kt)("h3",{id:"video"},"Video"),(0,i.kt)("p",null,"Any videos recorded of the run are stored in the videosFolder which is set to cypress/videos by default."),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"The plugins file is a special file that executes in Node before the project is loaded, before the browser launches, and during your test execution. While the Cypress tests execute in the browser, the plugins file runs in the background Node process, giving your tests the ability to access the file system and the rest of the operating system by calling the cy.task() command."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file. We do this purely as a convenience mechanism so you don't have to import this file in every single one of your spec files."))}p.isMDXComponent=!0},5162:function(e,t,r){t.Z=r.p+"assets/images/01-folder-structure-5d58089e3d917d2645c5c9d6a9b5dd33.png"}}]);