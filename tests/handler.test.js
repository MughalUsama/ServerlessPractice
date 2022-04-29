
const handler = require('../handler');

test('This should pass', async () => {
  const data = await handler.hello();
  expect(data).toBe("success");
});

test('This one should pass too', async () => {
  const data = await handler.a_function();
  expect(JSON.parse(data.body)).toMatchObject(
      {a_message: "Success from a function"}
  );
});
test('This one should fail', async () => {
  const data = await handler.another_function();
  expect(data).toBe({"another_message": "Another function called"});
});

