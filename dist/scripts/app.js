/******/!function(r){function t(o){if(e[o])return e[o].exports;var n=e[o]={exports:{},id:o,loaded:!1};return r[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r,t,e){"use strict";var o=e(1);angular.module("rootScopeEvents",[]).directive("rsClick",o.RootScopeClickDirective)},function(r,t){"use strict";function e(r){"ngInject";function t(t,e,o){function n(){var e=t.$eval(o.rsClickArgs),n=t.$eval(o.rsClick);if(!angular.isString(n))throw new Error("Invalid event.  Must be a string");if("$destroy"===n)throw new Error("Invalid event.  Cannot broadcast $destroy");e?r.$broadcast(n,e):r.$broadcast(n),t.$apply()}function i(){e.off("click",n)}e.on("click",n),t.$on("destroy",i)}var e={restrict:"A",priority:4,link:t};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.RootScopeClickDirective=e,e.$inject=["$rootScope"]}]);
//# sourceMappingURL=../maps/scripts/app.js.map