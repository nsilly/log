import winston from 'winston';
import { StackTrace } from '../StackTrace';
import { ColorfulConsole } from './Transporters/ColorfulConsole';
import { App } from '@nsilly/container';

export class Logger {
  constructor() {
    this.shouldCaptureStackTrace = false;
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

    const transporters = adapters.map(item => item.getAdapter());

    transporters.forEach(item => {
      if (item instanceof ColorfulConsole) {
        this.shouldCaptureStackTrace = true;
        App.bind(StackTrace, StackTrace, true);
      }
      this.logger.add(item);
    });
  }

  captureStackTrace() {
    var orig = Error.prepareStackTrace;
    var err = new Error();
    Error.captureStackTrace(err);
    var stack = err.stack;

    Error.prepareStackTrace = orig;
    // var data = stack.split('\n')[2].match(new RegExp(/.*\(((\/.*)\:(\d*)\:(\d*)\))/));
    return stack;
  }

  log(level, message, context) {
    if (this.shouldCaptureStackTrace) {
      App.make(StackTrace).setStack(this.captureStackTrace());
    }
    if (context !== undefined) {
      this.logger.log(level, message, context);
    } else {
      this.logger.log(level, message);
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
    this.log('emergency', message, context);
  }

  /**
   * Log an alert message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */

  alert(message, context) {
    this.log('alert', message, context);
  }

  /**
   * Log a critical message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  critical(message, context) {
    this.log('critical', message, context);
  }
  /**
   * Log an error message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  error(message, context) {
    this.log('error', message, context);
  }

  /**
   * Log a warning message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  warning(message, context) {
    this.log('warning', message, context);
  }

  /**
   * Log a notice to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */

  notice(message, context) {
    this.log('notice', message, context);
  }

  /**
   * Log an informational message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  info(message, context) {
    this.log('info', message, context);
  }

  /**
   * Log a debug message to the logs.
   *
   * @param  string  message
   * @param  object  context
   * @return void
   */
  debug(message, context) {
    this.log('debug', message, context);
  }
}
