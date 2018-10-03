/* eslint-disable no-console */
/*
 * console.js: Transport for outputting to the console.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 */

'use strict';

import os from 'os';
import colors from 'colors';
import { LEVEL, MESSAGE } from 'triple-beam';
import TransportStream from 'winston-transport';

/**
 * Transport for outputting to the console.
 * @type {Console}
 * @extends {TransportStream}
 */
export class ColorfulConsole extends TransportStream {
  /**
   * Constructor function for the Console transport object responsible for
   * persisting log messages and metadata to a terminal or TTY.
   * @param {!Object} [options={}] - Options for this instance.
   */
  constructor(options = {}) {
    super(options);

    // Expose the name of this Transport on the prototype
    this.name = options.name || 'console';
    this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
    this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
    this.eol = options.eol || os.EOL;
  }

  /**
   * Core logging method exposed to Winston.
   * @param {Object} info - TODO: add param description.
   * @param {Function} callback - TODO: add param description.
   * @returns {undefined}
   */
  log(info, callback) {
    setImmediate(() => this.emit('logged', info));

    let color = colors.green;
    // Remark: what if there is no raw...?
    switch (info[LEVEL]) {
      case 'emergency':
      case 'alert':
      case 'critical':
      case 'error':
        color = colors.red;
        break;
      case 'warning':
      case 'notice':
        color = colors.yellow;
        break;
    }

    // Remark: what if there is no raw...?
    if (this.stderrLevels[info[LEVEL]]) {
      if (console._stderr) {
        // Node.js maps `process.stderr` to `console._stderr`.
        console._stderr.write(color(`${info[MESSAGE]}${this.eol}`));
      } else {
        // console.error adds a newline
        console.error(color(info[MESSAGE]));
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    } else if (this.consoleWarnLevels[info[LEVEL]]) {
      if (console._stderr) {
        // Node.js maps `process.stderr` to `console._stderr`.
        // in Node.js console.warn is an alias for console.error
        console._stderr.write(color(`${info[MESSAGE]}${this.eol}`));
      } else {
        // console.warn adds a newline
        console.warn(color(info[MESSAGE]));
      }

      if (callback) {
        callback(); // eslint-disable-line callback-return
      }
      return;
    }

    if (console._stdout) {
      // Node.js maps `process.stdout` to `console._stdout`.
      console._stdout.write(color(`${info[MESSAGE]}${this.eol}`));
    } else {
      // console.log adds a newline.
      console.log(color(info[MESSAGE]));
    }

    if (callback) {
      callback(); // eslint-disable-line callback-return
    }
  }

  /**
   * Returns a Set-like object with strArray's elements as keys (each with the
   * value true).
   * @param {Array} strArray - Array of Set-elements as strings.
   * @param {?string} [errMsg] - Custom error message thrown on invalid input.
   * @returns {Object} - TODO: add return description.
   * @private
   */
  _stringArrayToSet(strArray, errMsg) {
    if (!strArray) return {};

    errMsg = errMsg || 'Cannot make set from type other than Array of string elements';

    if (!Array.isArray(strArray)) {
      throw new Error(errMsg);
    }

    return strArray.reduce((set, el) => {
      if (typeof el !== 'string') {
        throw new Error(errMsg);
      }
      set[el] = true;

      return set;
    }, {});
  }
}
