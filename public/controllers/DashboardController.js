/**
 * Descriere: Controller for everything regarding the contact list
 * Author: Ioana Abrudan
 */


var app = angular.module('contacts');
app.controller('DashboardController', function($http, $state){
    var vm = this;

    vm.contacts = {};

    vm.contacts = function() {

       $http({
            method: 'POST',
            url: 'contacts/:contactId',
            data: vm.contacts

       
    });
       debbuger;
}
});