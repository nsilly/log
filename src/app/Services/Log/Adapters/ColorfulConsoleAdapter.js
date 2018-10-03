import { Adapter } from './Adapter';
import { ColorfulConsole } from '../Transporters/ColorfulConsole';

export class ColorfulConsoleAdapter extends Adapter {
  constructor() {
    super();
    this.adapter = new ColorfulConsole();
  }
}
