// /**
//  * Configurations of logger.
//  */
// const winston = require('winston');
// const winstonRotator = require('winston-daily-rotate-file');

// const consoleConfig = [
//     new winston.transports.Console({
//         'colorize': true
//     })
// ];

// // const createLogger = new winston.Logger({
// //     'transports': consoleConfig
// // });
// const levels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// };

// const createLogger = winston.createLogger({
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs.log' })
//   ]
// });

// createLogger.log({
//   level: 'info',
//   message: 'Hello distributed log files!'
// });

// createLogger.info('Hello again distributed logs');

// const files = new winston.transports.File({ filename: 'logs.log' });
// const console = new winston.transports.Console();

// createLogger
//   .clear()          // Remove all transports
//   .add(console)     // Add console transport
//   .add(files)       // Add file transport
//   .remove(console); // Remove console transport


// const successLogger = createLogger;
// successLogger.add({
//     'name': 'access-file',
//     'level': 'info',
//     'filename': './logs/access.log',
//     'json': false,
//     'datePattern': 'yyyy-MM-dd-',
//     'prepend': true
// });

// // const errorLogger = createLogger;
// // errorLogger.add(winstonRotator, {
// //     'name': 'error-file',
// //     'level': 'error',
// //     'filename': './logs/error.log',
// //     'json': false,
// //     'datePattern': 'yyyy-MM-dd-',
// //     'prepend': true
// // });

// // module.exports = {
// //     'successlog': successLogger,
// //     'errorlog': errorLogger
// // };
