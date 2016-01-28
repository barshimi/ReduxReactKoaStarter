'use strict';

var crypto = require('crypto'),
    CryptoJS = require('node-cryptojs-aes').CryptoJS,
    algorithm = 'aes-256-ctr',
    password = '9rY5j2mH';

module.exports = {

    /**
     * encrypt string
     * @param  {string} str [strint to encrypt]
     * @return {string}     [encrypted string]
     */
    encrypt : function(str, pass) {
       password = pass || password;
       var cipher = crypto.createCipher(algorithm,password);
       var crypted = cipher.update(str,'utf8','hex');
       crypted += cipher.final('hex');
     return crypted;
    },

    /**
     * decrypt string
     * @param  {string} str [string to decrypt]
     * @return {string}     [decrypt string]
     */
    decrypt : function(str, pass) {
       password = pass || password;
       var decipher = crypto.createDecipher(algorithm,password)
       var dec = decipher.update(str,'hex','utf8')
       dec += decipher.final('utf8');
     return dec;
    },

    /**
     * encrypt string for browser
     * @param  {string} str [strint to encrypt]
     * @return {string}     [encrypted string]
     */
    encryptUi : function(str, pass) {
       return CryptoJS.AES.encrypt(str, pass).toString();
    },

    /**
     * decrypt string in browser
     * @param  {string} str [string to decrypt]
     * @return {string}     [decrypt string]
     */
    decryptUi :  function(str, pass) {
       var decrypted = CryptoJS.AES.decrypt(str, pass);
       return CryptoJS.enc.Utf8.stringify(decrypted);
    }
}




