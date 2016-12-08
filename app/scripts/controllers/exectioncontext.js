'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:ExectioncontextCtrl
 * @description
 * # ExectioncontextCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('ExectionContextCtrl', function () {
	var ctrl = this;
	  
	  ctrl.sideMenuIsVisible = false;
	  
	  ctrl.openSideMenu = function()
	  {
		  ctrl.sideMenuIsVisible = true;
	};
	
	ctrl.closeSideMenu = function()
	  {
		  ctrl.sideMenuIsVisible = false;
	};
	
  });
