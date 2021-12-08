import { getRandomJoke, getRandomJokes } from './utils';

const randomJoke = () => {
  const joke = getRandomJoke();
  return joke;
};

const randomJokes = (range: number) => {
  const jokes = getRandomJokes(range);
  return jokes;
};

export { randomJoke, randomJokes };
