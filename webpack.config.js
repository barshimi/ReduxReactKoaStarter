require('babel/register');

const config   = require('./app/config');
module.exports = require('./app/build/webpack/' + config.get('env'));
