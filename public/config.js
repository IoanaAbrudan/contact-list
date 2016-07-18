/**
* App config
* Author: Ioana Abrudan
*/

'use strict';

var config = function ($stateProvider, $urlRouterProvider) {

  var checkLoggedIn = function (Auth, $cookies, AuthAPI, $q) {

    var deferred = $q.defer();
    
    if ($cookies.getObject('loginData')) {
        var user = $cookies.getObject('loginData');    

        return AuthAPI.login(user)
         .success(function (response) {
            Auth.setAuth(response);
        });
    }
  };

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
     .state('dashboard', {
      url:'/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve: {
        checkLoggedIn: checkLoggedIn
      }
    })
};

angular.module('contacts').config(config);