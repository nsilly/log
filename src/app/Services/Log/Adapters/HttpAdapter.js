import { Adapter } from './Adapter';
import winston from 'winston';

export class HttpTransporter extends Adapter {
  constructor(options = {}) {
    super();
    this.adapter = new winston.transports.Http(options);
  }
}
