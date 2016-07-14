/**
 * Descriere: Controller for everything regarding the contact list
 * Author: Ioana Abrudan
 */


var app = angular.module('contacts');
app.controller('DashboardController', function($http, $state){
    var vm = this;

       $http({
            method: 'GET',
            url: '/v1/contacts',
    }).then(function (response) {    
     vm.contact = response.data;
     debugger;
});
});