'use strict';

describe('Controller: ExectioncontextCtrl', function () {

  // load the controller's module
  beforeEach(module('movieExplorerApp'));

  var ExectioncontextCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExectioncontextCtrl = $controller('ExectioncontextCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
