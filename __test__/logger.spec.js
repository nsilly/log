import { FileAdapter } from '../src/app/Services/Log/Adapters/FileAdapter';
import { Adapter } from '../src/app/Services/Log/Adapters/Adapter';
import { ConsoleAdapter } from '../src/app/Services/Log/Adapters/ConsoleAdapter';
import { Logger } from '../src/app/Services/Log/Logger';
import { ColorfulConsoleAdapter } from '../src/app/Services/Log/Adapters/ColorfulConsoleAdapter';

beforeEach(async () => {});

// describe('File Adapter', () => {
//   it('should be instance of Adapter', async () => {
//     const adapter = new FileAdapter();
//     expect(adapter).toBeInstanceOf(Adapter);
//   });
// });

// describe('Console Adapter', () => {
//   it('should be instance of Adapter', async () => {
//     const adapter = new ConsoleAdapter();
//     expect(adapter).toBeInstanceOf(Adapter);
//   });
// });

// describe('Looger', () => {
//   it('should be created', async () => {
//     const logger = new Logger();
//     expect(logger).toBeInstanceOf(Logger);
//   });

//   it('can set adapters', async () => {
//     const logger = new Logger();
//     const consoleAdapter = new ConsoleAdapter();
//     const fileAdapter = new FileAdapter();
//     logger.setAdapters([consoleAdapter, fileAdapter]);
//     expect(logger.transports).toHaveLength(2);
//   });
// });

describe('Test get function name and line', () => {
  it('test', () => {
    const logger = new Logger();
    const adapter = new ColorfulConsoleAdapter();
    logger.setAdapters([adapter]);
    logger.info('test');

    expect(true).toBeTruthy();
  });
});
