'use strict';

var fs = require('fs')

module.exports = {

    readHtmlFile  : function(src) {
          return new Promise(function (resolve, reject) {
            fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
              if(err) return reject(err);

              resolve(data);
            });
          });
    },

    secured : function *(next) {
        if (this.isAuthenticated()) {
          yield next;
        } else {
          this.set('Content-Type', 'application/json');
          this.status = 302;
          this.body = { staus: "Not Allowed"};
        }
    },

    module_exists : function ( name ) {
        try { return require.resolve( name ) }
        catch( e ) { return false }
    }
}
