/**
 * Descriere:
 * Author: 
 */

var app = angular.module('contacts');
app.controller('RegisterController', function($http) {
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
    
});
 




   
    