# NSilly Logger

- [NSilly Logger](#nsilly-logger)
    - [Introduction](#introduction)
    - [Configuration](#configuration)
    - [Log Levels](#log-levels)
    - [Usage](#usage)

<a name="introduction"></a>

## Introduction

NSilly Logger based on [winston](https://github.com/winstonjs/winston). It's a Logger that can help you learn what's happening within your application, NSilly Log provides a logging service that can help you write your log message to file or transfer them to anywhere.

<a name="configuration"></a>

## Configuration

<a name="log-levels"></a>

## Log Levels
NSilly Logger offers all of the log levels defined in the RFC 5424 specification: emergency, alert, critical, error, warning, notice, info, and debug.

So, imagine we log a message using the debug method:
```javascript
import { Logger } from '@nsilly/log';

const logger = new Logger();
logger.debug('Message goes here', { data: 'context' });

```

<a name="usage"></a>

## Usage

```javascript
import { Logger } from '@nsilly/log';

// If you want to log an error message
const logger = new Logger();
logger.error('Message goes here', { data: 'context' });
// or
logger.log('error', 'Message goes here', { data: 'context' });
```
