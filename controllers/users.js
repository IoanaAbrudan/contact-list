'use strict';

var mongoose = require('mongoose');
var User = require('../models/users');
var _ = require('lodash');

exports.user = function (req, res, next, id) {
    User.load(id, function (err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load user with id ' + id));
        req.user = user;
        next();
    });
};

exports.show = function (req, res) {
    res.json(req.user);
};

exports.destroy = function (req, res) {
    var user = req.user;
    
    user.remove(function (err) {
        if (err) {
            res.status(500).json({
                error: 'Cannot delete user'
            });
        }
        res.json(user);
    });
};

exports.update = function (req, res) {
    var user = req.user;
    
    user = _.extend(user, req.body);
    
    user.save(function (err) {
        if (err) {
            res.status(500).json({
                error: 'Cannot update user'
            });
        }
        res.json(user);
    });
};

exports.all = function (req, res) {
    User.find().exec(function (err, users) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list users'
            });
        }
        res.json(users);
    });
};

exports.create = function (req, res) {
    
    var user = new User(req.body);
    
    user.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        res.status(201).json(user);
    });
};
