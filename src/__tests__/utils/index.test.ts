import { getRandomJoke, getRandomJokes, getYoMommaJoke, getYoMommaJokes } from '../../utils/index';
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

  const yoMommaJokeObjectMatch = {
    id: expect.any(Number),
    type: expect.stringContaining('yo-momma'),
    setup: expect.extend({
      toBeUndefined() {
        return this.isUndefined()
      }
    }),
    punchline: expect.any(String),
  }

describe('get random yoMomma joke', () => {
  test('return random joke object', () => {
    const joke = getYoMommaJoke();
    console.log(joke);
    expect(joke).toBeInstanceOf(Object);
    expect(joke).toMatchObject(yoMommaJokeObjectMatch)
  })
})

describe('get random yoMomma jokes', () => {
  test('return array of random yoMomma jokes', () => {
    const JOKES_REQUESTED = 3;
    const jokes: object[] = getYoMommaJokes(JOKES_REQUESTED);
    expect(jokes).toBeInstanceOf(Array);
    expect(jokes).toHaveLength(JOKES_REQUESTED);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(yoMommaJokeObjectMatch)
    })
  })
  test('return max number of 50 random yoMomma jokes', () => {
    const JOKES_REQUESTED = 500;
    const MAX_JOKES = 50;
    const jokes = getYoMommaJokes(JOKES_REQUESTED);
    expect(jokes).toHaveLength(MAX_JOKES);
    expect(jokes).toBeInstanceOf(Array);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(yoMommaJokeObjectMatch)
    })
  })
  test('return only one joke if no param provided', () => {
    const jokes = getYoMommaJokes();
    expect(jokes).toHaveLength(1);
    expect(jokes).toBeInstanceOf(Array);
    jokes.forEach(joke => {
      expect(joke).toMatchObject(yoMommaJokeObjectMatch)
    })
  })
  test('should throw error if param provided is less than 1', () => {
    expect(() => getYoMommaJokes(0)).toThrowError('Number of jokes must be greater than 0');
    expect(() => getYoMommaJokes(-1)).toThrowError('Number of jokes must be greater than 0');
  })
})
