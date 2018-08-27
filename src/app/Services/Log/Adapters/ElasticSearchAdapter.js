import Elasticsearch from 'winston-elasticsearch';
import { Adapter } from './Adapter';

export class ElasticSearchAdapter extends Adapter {
  constructor() {
    super();
    this.adapter = new Elasticsearch({
      level: 'info'
    });
  }
}
