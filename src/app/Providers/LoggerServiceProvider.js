import { Logger } from '../Services/Log/Logger';
import { App } from '@nsilly/container';
import { ServiceProvider } from '@nsilly/support';

export class LoggerServiceProvider extends ServiceProvider {
  register() {
    App.singleton(Logger, Logger);
  }
}
