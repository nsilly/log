import winston from 'winston';
import { Adapter } from './Adapter';

export class FileAdapter extends Adapter {
  constructor() {
    super();
    this.adapter = new winston.transports.File({ filename: 'app.log' });
  }
}
