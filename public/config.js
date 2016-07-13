/**
* App config
* Author:
*/

'use strict';

var config = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller:'LoginController',
      controllerAs: 'login'
    })
    .state('register', {
      url:'/register',
      templateUrl: 'partials/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'
    })
    
};

angular.module('contacts').config(config);