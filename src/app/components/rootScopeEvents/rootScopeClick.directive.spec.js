/* global inject */
/* global ModuleBuilder */
describe('root scope click', function() {
  let $compile;
  let $rootScope;

  beforeEach(ModuleBuilder.forModules('rootScopeEvents').build());

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    spyOn($rootScope, '$broadcast').and.callThrough();
  }));

  it('should broadcast event on click', inject(function() {
    $rootScope.test = 'test';
    let element = $compile(`<div rs-click="test"></div>`)($rootScope);
    $rootScope.$apply();

    element.triggerHandler('click');

    expect($rootScope.$broadcast).toHaveBeenCalledWith('test');
  }));

  it('should broadcast event on click with arguments', inject(function() {
    $rootScope.test = 'test';
    $rootScope.args = { };
    let element = $compile(`<div rs-click="test" rs-click-args="args"></div>`)($rootScope);
    $rootScope.$apply();

    element.triggerHandler('click');

    expect($rootScope.$broadcast).toHaveBeenCalledWith('test', $rootScope.args);
  }));

  it('should update scope on event', inject(function() {
    $rootScope.test = 'test';
    $rootScope.args = { };
    var newValue = null;
    var child = $rootScope.$new();
    let element = $compile(`<div rs-click="test" rs-click-args="args"><div id="test">{{newValue}}</div></div>`)($rootScope);
    $rootScope.$apply();
    child.$on('test', function() {
      $rootScope.newValue = 'test';
    });
    element.triggerHandler('click');
    expect(element.find('#test').text()).toBe('test');
  }));

  it('should fail when non-string is event', inject(function() {
    $rootScope.test = {};
    let element = $compile(`<div rs-click="test" rs-click-args="args"></div>`)($rootScope);
    $rootScope.$apply();

    expect(function() {
      element.triggerHandler('click');
    }).toThrowError();
  }));

  it('should fail when $destroy is event', inject(function() {
    $rootScope.test = '$destroy';
    let element = $compile(`<div rs-click="test" rs-click-args="args"></div>`)($rootScope);
    $rootScope.$apply();

    expect(function() {
      element.triggerHandler('click');
    }).toThrowError();
  }));
});
