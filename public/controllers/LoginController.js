/**
 * Descriere: Controller for everything regarding the login process
 * Author: Ioana Abrudan
 */


var app = angular.module('contacts');
app.controller('LoginController', function($http, $state, Auth, AuthAPI, $cookies){
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
        //  $http({
        //     method: 'POST',
        //     url: '/v1/session',
        //     data: vm.user
        // })
        AuthAPI.login(vm.user)
         .success(function (response) {
            // $rootScope.id = response._id;
            Auth.setAuth(response);
            $cookies.putObject('loginData', vm.user);
            $state.go('dashboard');
            
            
        }).error(function(response) {
             vm.errorMessage = response.err;
        });

}
      
});