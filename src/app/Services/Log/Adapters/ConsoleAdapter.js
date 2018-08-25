import winston from 'winston';
import { Adapter } from './Adapter';

export class ConsoleAdapter extends Adapter {
  constructor() {
    super();
    this.adapter = new winston.transports.Console();
  }
}
