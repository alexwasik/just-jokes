import { getRandomJoke, getRandomJokes, getYoMommaJoke, getYoMommaJokes } from './utils';

const randomJoke = () => {
  const joke = getRandomJoke();
  return joke;
};

const randomJokes = (range: number) => {
  const jokes = getRandomJokes(range);
  return jokes;
};

const yoMommaJoke = () => {
  const joke = getYoMommaJoke();
  return joke;
};

const yoMommaJokes = (range: number) => {
  const jokes = getYoMommaJokes(range);
  return jokes;
};

export { randomJoke, randomJokes, yoMommaJoke, yoMommaJokes };
