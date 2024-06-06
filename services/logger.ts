import {createLogger, format, transports} from 'winston';

export const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.colorize()
    ),
    transports: [
        new transports.Console({
            level: 'info',
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/application.log',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        })
    ],
    exceptionHandlers: [
        new transports.Console({
            level: 'info'
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/exceptions.log',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        })
    ],
    rejectionHandlers: [
        new transports.Console({
            level: 'info',
        }),
        new transports.File({
            level: 'error',
            filename: 'logs/rejections.log',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        })
    ]
});
