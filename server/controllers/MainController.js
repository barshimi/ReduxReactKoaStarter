'use strict';

var RedditModel = require('../models/reddit_model'),
    jwt = require('jwt-simple'),
    JWT_SECRET = require('../helpers/ConstUtility')["JWT_SECRET"];

module.exports = {

    /**
     * [Reddit posts controller]
     * @yield {[json]} [reddit results]
     */
    RedditApp : function *(next) {
        var queryStr = this.query.hasOwnProperty("q") ? this.query.q : '';
        if(!queryStr.length) return this.body = [];

        var redditList = yield RedditModel.getPosts(queryStr);
        this.status = 200;
        this.body = { list : jwt.encode(redditList, JWT_SECRET) };
    }
}
