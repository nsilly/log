import Elasticsearch from 'winston-elasticsearch';
import { Adapter } from './Adapter';

export class ElasticSearchAdapter extends Adapter {
  constructor(options) {
    super();
    this.adapter = new Elasticsearch(options);
  }
}
