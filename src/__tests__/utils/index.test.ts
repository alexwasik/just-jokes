import { getRandomJoke } from '../../utils/index';

test('get random', () => {
  const joke = getRandomJoke();
  expect(joke).toMatchObject({
      id: expect.any(Number),
      type: expect.any(String),
      setup: expect.any(String),
      punchline: expect.any(String),
    })
})
