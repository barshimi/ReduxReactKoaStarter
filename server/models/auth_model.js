'use strict';

module.exports = {

    /**
     * [getUser description]
     * @param  {object} userInp [user name & user password]
     * @return {object}         [user details]
     */
    getUser : function(userInp){
        return new Promise(function (resolve, reject) {
            if(!Object.keys(userInp).length) {
              resolve({ err : "Incorrect user"});
            }else {
              if(userInp["username"] !== "admin") resolve({ err : "Incorrect username"});
              if(userInp["password"] !== "admin1234") resolve({ err : "Incorrect password"});

              resolve({ userId: 5, userName : "admin", userEmail: "admin@gmail.com" });
            }
        });
    }
}

