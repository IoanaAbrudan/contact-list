/**
 * Descriere: Controller for everything regarding the login process
 * Author: Ioana Abrudan
 */


var app = angular.module('contacts');
app.controller('LoginController', function($http, $state){
    var vm = this;

    vm.user = {};

    vm.login = function() {

       $http({
            method: 'POST',
            url: '/v1/session',
            data: vm.user

        }).then(function (response) { 
             $state.go('dashboard');
        });

         vm.errorMessage = '';
         $http({
            method: 'POST',
            url: '/v1/session',
            data: vm.user
        }).success(function (response) {
            $state.go('dashboard');
            
        }).error(function(response) {
             vm.errorMessage = err.response;
            debugger;
        });
    }
});