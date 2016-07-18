'use strict';

var mongoose = require('mongoose');
var Contact = require('../models/contacts');
var _ = require('lodash');

exports.contact = function (req, res, next, id) {
    Contact.load(id, function (err, contact) {
        if (err) return next(err);
        if (!contact) return next(new Error('Failed to load contact with id ' + id));
        req.contact = contact;
        next();
    });
};

exports.show = function (req, res) {
    res.json(req.contact);
};

exports.destroy = function (req, res) {
    var contact = req.contact;
    
    contact.remove(function (err) {
        if (err) {
            res.status(500).json({
                error: 'Cannot delete contact'
            });
        }
        res.json(contact);
    });
};

exports.update = function (req, res) {
    var contact = req.contact;
    
    contact = _.extend(contact, req.body);
    
    contact.save(function (err) {
        if (err) {
            res.status(500).json({
                error: 'Cannot update contact'
            });
        }
        res.json(contact);
    });
};

exports.all = function (req, res) {
    Contact.find().exec(function (err, contacts) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list contacts'
            });
        }
        res.json(contacts);
    });
};

exports.create = function (req, res) {
    
    var contact = new Contact(req.body);
    
    contact.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        res.status(201).json(contact);
    });
};
