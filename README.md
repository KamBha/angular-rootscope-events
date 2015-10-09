[![Build Status](https://travis-ci.org/KamBha/angular-rootscope-events.svg?branch=master)](https://travis-ci.org/KamBha/angular-rootscope-events)

# angular-rootscope-events

A set of directives to broadcast root scope events when the user does something.

# What do I need to run it?
The code was built with angular 1.4+ (though, in theory, it should work with earlier versions)

It is tested to work on IE10+.

# How do I install it?
The angular disclosure panel is available on bower.  You can install it via:-

bower install angular-rootscope-events --save

# How do I use it?
```html
   <body ng-app="rootScopeEventsTest">
    <div class="container" ng-controller="MainCtrl as mainCtrl">
     <button type="button" rs-click="mainCtrl.event">Click this to broadcast events</button>
     <div>{{mainCtrl.idx}}</div>
    </div>
    <script>
      angular.module('rootScopeEventsTest', [ 'rootScopeEvents' ])
             .controller('MainCtrl', [ '$rootScope', function MainCtrl($rootScope) {
                                var vm = this;
                                vm.event = 'test';
                                vm.idx = 0;
                                $rootScope.$on('test', function() {
                                  vm.idx = vm.idx + 1;
                                  console.log("Hello");
                                });
                              }]);
    </script>
  </body>
```
