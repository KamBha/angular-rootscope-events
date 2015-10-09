/* global */
import { RootScopeClickDirective } from '../app/components/rootScopeEvents/rootScopeClick.directive';

angular.module('rootScopeEvents', [])
  .directive('rsClick', RootScopeClickDirective)
;
