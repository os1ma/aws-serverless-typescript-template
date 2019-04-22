import Hello from '../../../src/domain/hello/hello'

test('hello', async () => {
  const hello = new Hello();
  expect(hello.greet()).toBe('Hello World!');
});