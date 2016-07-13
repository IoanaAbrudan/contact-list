/**
 * Descriere:
 * Author: 
 */


var app = angular.module('contacts');
app.controller('LoginController', function($http,$state){
    var vm = this;

     vm.user = {};

    vm.login = function() {


       $http({
            method: 'POST',
            url: '/v1/session',
            data: vm.user

        }).then(function (response){
            
        });

  $state.go('dashboard');
                
}
});
