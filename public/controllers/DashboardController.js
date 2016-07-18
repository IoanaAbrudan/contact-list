/**
 * Descriere: Controller for everything regarding the contact list
 * Author: Ioana Abrudan
 */


var app = angular.module('contacts');
app.controller('DashboardController', function($http, $state, Auth, $filter){
    var vm = this;

    $http({
        method: 'GET',
        url: '/v1/contacts',
    }).then(function (response){  

        var user = Auth.getAuth();
        console.log(user._id);

        vm.contacts = response.data.filter(function(item){
            return item.user === user._id;
        });
     
    });

});

