"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.colorize()),
    transports: [
        new winston_1.transports.Console({
            level: 'info',
        }),
        new winston_1.transports.File({
            level: 'error',
            filename: 'logs/application.log',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json())
        })
    ],
    exceptionHandlers: [
        new winston_1.transports.Console({
            level: 'info'
        }),
        new winston_1.transports.File({
            level: 'error',
            filename: 'logs/exceptions.log',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json())
        })
    ],
    rejectionHandlers: [
        new winston_1.transports.Console({
            level: 'info',
        }),
        new winston_1.transports.File({
            level: 'error',
            filename: 'logs/rejections.log',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json())
        })
    ]
});
