/**
* Service for communicating auth data between controllers
*/

'use strict';

var Auth = function () {
    var auth;

    return {
        getAuth: function () {
            return auth;
        },
        setAuth: function (a) {
            auth = a;
        }
    };
};

angular.module('contacts').factory('Auth', Auth);