import jokes from '../jokes/jokes.json';

const getRandomJoke = () => {
  const randomIndex: number = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const getRandomJokes = (numberOfJokes: number = 1) => {
  if (numberOfJokes <= 0) {
    throw new Error('Number of jokes must be greater than 0');
  }
  const MAX_JOKE_COUNT: number = 50;
  const randomJokes: object[] = [];
  const fetchJokes = (count: number) => {
    for (let i = 0; i < count; i++) {
      randomJokes.push(getRandomJoke());
    }
    return randomJokes;
  }

  if (numberOfJokes > MAX_JOKE_COUNT) {
    return fetchJokes(MAX_JOKE_COUNT);
  }
  return fetchJokes(numberOfJokes);
}

export { getRandomJoke, getRandomJokes };
