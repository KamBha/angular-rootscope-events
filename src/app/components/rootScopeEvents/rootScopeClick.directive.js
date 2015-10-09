export function RootScopeClickDirective($rootScope) {
  'ngInject';

  let directive = {
    restrict: 'A',
    priority: 4,
    link: link
  };

  return directive;

  function link(scope, element, attrs) {
    element.on('click', clickHandler);

    scope.$on('destroy', destroy);

    function clickHandler() {
      var args = scope.$eval(attrs.rsClickArgs);
      var event = scope.$eval(attrs.rsClick);
      if (!((typeof event) === 'string'))
        throw new Error("Invalid event.  Must be a string");

      if (event === '$destroy')
        throw new Error("Invalid event.  Cannot broadcast $destroy");
      if (args)
        $rootScope.$broadcast(event, args);
      else
        $rootScope.$broadcast(event)
    }


    function destroy() {
      element.off('click', clickHandler);
    }
  }
}
