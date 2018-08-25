import winston from 'winston';

export class Logger {
  constructor() {
    this.logger = winston.createLogger({
      transports: this.transports,
      levels: {
        emergency: 0,
        alert: 1,
        critical: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7
      }
    });
  }

  get transports() {
    if (this.logger === undefined) {
      return [];
    } else {
      return this.logger.transports;
    }
  }

  setAdapters(adapters) {
    this.logger.clear();
    if (!Array.isArray(adapters)) {
      throw new Error('You should put an array of adapter');
    }
    adapters.forEach(item => {
      this.logger.add(item.getAdapter());
    });
  }

  log(level, message, context) {
    if (context !== undefined) {
      this.logger.log({ level, message, context });
    } else {
      this.logger.log({ level, message });
    }
  }

  /**
   * Log an emergency message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  emergency(message, context) {
    this.logger.log('emergency', message, context);
  }

  /**
   * Log an alert message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */

  alert(message, context) {
    this.logger.log('alert', message, context);
  }

  /**
   * Log a critical message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  critical(message, context) {
    this.logger.log('critical', message, context);
  }
  /**
   * Log an error message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  error(message, context) {
    this.logger.log('error', message, context);
  }

  /**
   * Log a warning message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  warning(message, context) {
    this.logger.log('warning', message, context);
  }

  /**
   * Log a notice to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */

  notice(message, context) {
    this.logger.log('notice', message, context);
  }

  /**
   * Log an informational message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  info(message, context) {
    this.logger.log('info', message, context);
  }

  /**
   * Log a debug message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  debug(message, context) {
    this.logger.log('debug', message, context);
  }
}
