/**
* Api mask for auth calls
*/

'use strict';

var AuthAPI = function ($http) {
    return {
        register: function (user) {
            return $http({
                method: 'POST',
                url: '/v1/session/create',
                data: user
            });
        },
        login: function (user) {
            return $http({
                method: 'POST',
                url: '/v1/session',
                data: user
            });
        }
    }
};

angular.module('contacts').factory('AuthAPI', AuthAPI);