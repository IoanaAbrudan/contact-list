/**
 * Descriere: controller for everything regarding the sign up process
 * Author: Ioana Abrudan
 */

var app = angular.module('contacts');
app.controller('RegisterController', function($http, $state) {
    var vm = this;

    vm.user = {};
    vm.days = [];

    for (var i = 1; i < 32; i++) {
        vm.days.push(i);
    }

    vm.years = [];

    for(var i = 1900; i < 2017; i++) {
        vm.years.push(i);
    }
    
    $http.get('https://restcountries.eu/rest/v1/all').then(function (response) {
      
       vm.country = response.data;
        
      });
    vm.checkPasswordValidity = function () {
        
        if (vm.user.password !== vm.user.confirmPassword) {
            vm.errorMessage = "Passwords don't match";
        }
       
    };

    vm.register = function () {

        vm.errorMessage = '';

        if (!vm.user.email) {
            vm.errorMessage = 'Email is required';
            return;
        }

        vm.errorMessage = '';

        if (!vm.submit) {
            vm.errorMessage = "Please confirm your registration";
            return;
       }

        $http({
            method: 'POST',
            url: '/v1/session/create',
            data: vm.user
        }).then(function (response){
            $state.go('dashboard');
             
        });
    };
});
 





   
    