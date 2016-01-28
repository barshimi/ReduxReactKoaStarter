'use strict';

var fs = require('co-fs'),
    passport = require('koa-passport'),
    jwt = require('jwt-simple'),
    JWT_SECRET = require('../helpers/ConstUtility')["JWT_SECRET"];

module.exports = {

    /**
     * post login validate user and password
     * @yield {json}   validation results
     */
    validUser : function *(next) {
        var ctx = this;
        yield passport.authenticate('local', function*(err, user, info) {
              if (err) throw err
              if (user === false) {
                ctx.status = 401
                ctx.body = { success: info.message };
              } else {
                var generateSession = Math.random().toString(36).substr(2, 6);
                ctx.session.userDetails = { userId : user.userId, userEmail : user.userEmail, userSession : generateSession, userName: user.userName };

                yield ctx.login(user);
                ctx.status = 200;
                ctx.body = { success: true , user: jwt.encode(user, JWT_SECRET) };
              }
        }).call(this, next);
    },

    /**
     * logout from application. destroy session
     * @yield {[type]} [description]
     */
    logout : function *() {
       var ctx = this;
       this.logout();
       delete this.session.userDetails;
       ctx.status = 200;
       ctx.body = { success: true };
    }
}




