"use strict";

var Router = require("koa-router"),
    utils = require('../helpers/Utils');


module.exports = function (app) {
    var route = new Router(),
        AuthController = require('../controllers/AuthController');

    // POST login validation route
    route.post("/admin/login", AuthController.validUser);

    // GET logout route
    route.get("/admin/logout", AuthController.logout);

    /**  API router **/

    /**
     * get performance route, example : /admin/bootstrap?q=reactjs
     */
    route.get("/admin/main", utils.secured, require('../controllers/MainController').RedditApp);

    app.use(route.middleware());
    app.use(route.allowedMethods());

};
