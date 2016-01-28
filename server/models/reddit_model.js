'use strict';

var request = require('request');
var moment = require('moment');

module.exports = {
    /**
     * [getPosts description]
     * @param  {[type]} queryStr [description]
     * @return {[type]}          [description]
     */
    getPosts : function *(queryStr){
        return new Promise(function (resolve, reject) {
              request('https://www.reddit.com/r/' + queryStr + '.json', function (error, response, body) {
                  if(error && response.statusCode !== 200) reject(error);

                  var redditObj = JSON.parse(body);
                  if(!redditObj.hasOwnProperty("data") &&
                     !redditObj.data.hasOwnProperty("children") &&
                     Object.prototype.toString.call( redditObj["data"]["children"] ) !== '[object Array]') return;

                  var redditList = redditObj["data"]["children"].map(function(item){
                     return {
                        url : item["data"]["url"],
                        title : item["data"]["title"],
                        created : moment.utc(item["data"]["created"], 'X').format("dddd, MMMM Do YYYY"),
                        permalink : 'https://www.reddit.com' + item["data"]["permalink"],
                        author : item["data"]["author"],
                        score : item["data"]["score"],
                        num_comments : item["data"]["num_comments"]
                     }
                  })
                  resolve(redditList);
                })
        });
    }
}
