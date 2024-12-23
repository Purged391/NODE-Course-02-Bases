import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger-plugin', () => {
    test('buildLogger should return a function', () => {
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log should log a message', () => {
        const winstonLoggerMonck = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';
        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMonck).toHaveBeenCalledWith('info', expect.objectContaining({level: 'info', message, service}));
    });
    test('logger.error should log a message', () => {
        const winstonLoggerMonck = jest.spyOn(winstonLogger, 'error');
        const message = 'test message';
        const service = 'test service';
        const logger = buildLogger(service);

        logger.error(message);

        expect(winstonLoggerMonck).toHaveBeenCalledWith('error', expect.objectContaining({message, service}));
    });
});