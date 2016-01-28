'use strict';

module.exports = {

        JWT_SECRET : "1h3izO7b",

        getKey : function(value){
          if(value == "default") return value;

          for(var key in this){
            if(this[key] == value){
              return key;
            }
          }
          return null;
        },

        ObjKeyByVal : function(AD_TYPE_INT, val) {
           return Object.keys(AD_TYPE_INT).filter(function(key) {return AD_TYPE_INT[key] === val})[0];
        },

        sortBy : function(obj, key) {
            obj.sort(function(a,b) {
                return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
            });
        }

}


