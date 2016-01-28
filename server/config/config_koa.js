'use strict';

var logger = require('koa-logger'),
    cors = require('koa-cors'),
    session = require('koa-generic-session'),
    redisStore = require('koa-redis'),
    passport = require('./config_auth'),
    bodyParser = require('koa-bodyparser'),
    // connect = require('../config/config_mysql'),
    config = require('./config_main');


module.exports = function(app) {
     /**
      * use logger for development environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     if (config.app.env !== 'production' && config.app.env !== 'test'){
        app.use(logger());
     }

     /**
      * use live reload for development environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     if (config.app.env === 'development') {
        // app.use(require('koa-livereload')());
     }

     /**
      * create a global mysql pool connection
      */
     if(!global.mysql){
        // global.mysql = connect.multiplePool();
        console.log("app:config - create global db instance");
     }

    /**
      * use debug for development and test environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     // if (config.app.env !== 'production') {
     //     app.debug();
     // }
     app.use(cors({
        maxAge: config.app.hasOwnProperty("cacheTime") ? config.app.cacheTime / 1000 : 0,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
        headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
     }));

     /**
      * using redis session for authentication
      */
     app.keys = ['a67w89AbxEP'];
     app.use(session({
        key : "sample.sid",
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        store: redisStore()
     }));

     /**
      *  initializing passport authentication
      */
      passport(app);

     /**
      *  a body parser base on co-body
      */
     app.use(bodyParser());

};
