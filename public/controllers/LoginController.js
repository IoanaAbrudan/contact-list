/**
 * Descriere:
 * Author: 
 */


var app = angular.module('contacts');
app.controller('LoginController', function($http){
    var vm = this;

    var vm.user = {};

    vm.login = function{
        if(submit()){

       $http({
            method: 'POST',
            url: '/v1/session',
            data: vm.user

        }).then(function (response){
            
        });



                    }

}
}
