export class StackTrace {
  constructor() {
    console.log('test============');
  }
  getStack() {
    console.log('=====GET=====');

    return this.stack;
  }
  setStack(stack) {
    console.log('=====SET=====');
    this.stack = stack;
    return this;
  }
}
