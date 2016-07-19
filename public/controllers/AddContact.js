/**
 * Descriere: Controller for everything regarding the add contact
 * Author: Ioana Abrudan
 */

var app = angular.module('contacts');
app.controller('AddContact', function($http, $state, Auth){
    var vm = this;
    vm.contact = {};

    vm.add = function () {
       var user = Auth.getAuth();
       vm.contact.user=user._id;
    $http({
        method: 'POST',
        url: '/v1/contacts',
        data: vm.contact

    }).then(function (response){  
        
         debugger;
        
         $state.go('dashboard');
     });



}
});