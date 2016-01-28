'use strict';

var passport = require('koa-passport'),
    auth_model = require('../models/auth_model'),
    session = require('koa-generic-session'),
    LocalStrategy = require('passport-local').Strategy,
    co = require("co");

module.exports = function( app ) {

    /**
     * serialize user
     * @param  {object} user  [username and password]
     * @param  {fun}    done
     */
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    /**
     * deserialize user
     * @param  {object} user  [username and password]
     * @param  {fun}    done
     */
    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

    /**
     *
     * @param  {string} username
     * @param  {string} password
     * @param  {fun}    done
     * @return {boolean}
     */
     passport.use(new LocalStrategy(function(username, password, done) {
        var userInp = { username :  username, password : password };

        auth_model.getUser(userInp).then(function(user){
                if(user.hasOwnProperty("err")){
                    return done(null, false, { message: user["err"]});
                }
                console.log(user);
            return done(null, user);
        });
     }));


    /**
     * initializing passport authentication
     */
    app.use(passport.initialize());
    app.use(passport.session());

}



