import { getRandomJoke, getRandomJokes } from '../../utils/index';
  const jokesObjectMatch = {
    id: expect.any(Number),
    type: expect.any(String),
    setup: expect.any(String),
    punchline: expect.any(String),
  }
describe('getRandomJoke', () => {
  test('return random joke object', () => {
    const joke = getRandomJoke();
    expect(joke).toMatchObject(jokesObjectMatch)
  })
})

describe('get random jokes', () => {
  test('return specific number random jokes', () => {
    const JOKES_REQUESTED = 3;
    const jokes = getRandomJokes(JOKES_REQUESTED);
    expect(jokes).toHaveLength(JOKES_REQUESTED);
    expect(jokes).toBeInstanceOf(Array);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(jokesObjectMatch)
    })
  })
  test('return max number of 50 random jokes', () => {
    const JOKES_REQUESTED = 500;
    const MAX_JOKES = 50;
    const jokes = getRandomJokes(JOKES_REQUESTED);
    expect(jokes).toHaveLength(MAX_JOKES);
    expect(jokes).toBeInstanceOf(Array);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(jokesObjectMatch)
    })
  })

  test('return only one joke if no param provided', () => {
    const jokes = getRandomJokes();
    expect(jokes).toHaveLength(1);
    expect(jokes).toBeInstanceOf(Array);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(jokesObjectMatch)
    })
  })

  test('should throw error if param provided is less than 1', () => {
    expect(() => getRandomJokes(0)).toThrowError('Number of jokes must be greater than 0');
    expect(() => getRandomJokes(-1)).toThrowError('Number of jokes must be greater than 0');
  })
})
