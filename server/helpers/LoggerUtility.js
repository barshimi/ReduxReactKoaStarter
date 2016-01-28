'use strict';
    /**
     * logger for console and log files
     * example : Logger.info( "some short msg", { "fileName" : __dirname , "user" : this.session.passport, "data" : {"foo" : "bar"} });
     */

    var winston = require('winston'),
        fs = require('fs'),
        dateFormat = require('dateformat');

    var config = {
        levels : {
            ecpmGlobal : 0,
            ecpmGeo : 1,
            networks : 2,
            info : 3,
            data : 4,
            debug : 5,
            error : 6
        },
        colors : {
            ecpmGlobal : 'magenta',
            ecpmGeo : 'cyan',
            networks : 'yellow',
            info : 'green',
            data : 'grey',
            debug : 'blue',
            error : 'red'
        }
    };

    /**
     * create log file every day
     * @type {String}
     */
    var dayLogFile = 'syslog_' + dateFormat(new Date(), "yyyy_mm_dd") + '.log';
    fs.exists(__dirname + '/../../logs/' + dayLogFile, function(exist){
       if(!exist) {
          fs.writeFile(__dirname + '/../../logs/' + dayLogFile, '// syslog_' + dateFormat(new Date(), "yyyy_mm_dd") + '\n', { encoding : 'utf8', mode : 438 }, function (err) {
              if (err) throw err;
          });
       }
    });

    /**
     * create transports to console and file
     */
    var logger = module.exports = new (winston.Logger)({
        transports : [
            new winston.transports.File({
                filename: __dirname + '/../../logs/' + dayLogFile,
                json: true,
                levels: config.levels,
                maxsize: 5242880, //5MB
                timestamp: function() {
                    return dateFormat();
                },
                colorize: true
            }),
            new winston.transports.Console({
                json: true,
                handleExceptions: true,
                levels: config.levels,
                timestamp: function() {
                    return dateFormat();
                },
                colorize: true
            })
        ],
        levels : config.levels,
        colors : config.colors
    });
