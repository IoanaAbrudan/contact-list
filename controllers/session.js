/**
 * Controller for everything regarding Auth
 * Author: Dan Moldovan
 */

'use strict';

var User = require('../models/users');

exports.register = function (req, res) {
    var user = new User(req.body);
    User.register(user, req.body.password, function (err, user) {
        if (err) {
            res.status(500).json({
                err: 'Cannot register user'
            });
        }
        else {
            res.json(user);
        }
    });
};

exports.create = function (req, res) {
  User.findOne({email: req.body.email}).exec(function (err, user) {
    if (err || !user) {
      res.status(500).json({
        err: 'Invalid email or password'
      });
    }
    else {
      user.authenticate(req.body.password, function (err, authenticated) {
        if (err) {
          res.status(500).json({
            err: err.message
          });
        }
        else if (!authenticated) {
          res.status(401).json({
            err: 'Email or password invalid'
          });
        }
        else {
          res.json(authenticated);
        }
      });
    }
  });
};

