import jokes from '../jokes/jokes.json';
const yoMomma = require('yo-mamma').default;

const DICT_MAX: number = 1039;
const MAX_JOKE_COUNT: number = 50;


const uniqueIndex = (maxNr: number) => {
  let array: number[] = []
  for (let i = 0; i < maxNr; i++) {
    let random = Math.floor(Math.random() * DICT_MAX)
    array.push(random)
  }
  return array
}

const getRandomJoke = () => {
  const randomIndex: number = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const getRandomJokes = (numberOfJokes: number = 1) => {
  if (numberOfJokes <= 0) {
    throw new Error('Number of jokes must be greater than 0');
  }
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

const getYoMommaJoke = () => {
  const random_index: number = Math.floor(Math.random() * DICT_MAX);
  const joke = yoMomma(random_index);
  return {
    id: random_index,
    type: 'yo-momma',
    setup: undefined,
    punchline: joke
  }
}

const getYoMommaJokes = (numberOfJokes: number = 1): object[] => {
  if (numberOfJokes <= 0) {
    throw new Error('Number of jokes must be greater than 0');
  }

  const randomJokes: object[] = [];
  const fetchJokes = (count: number) => {
    const jokes = uniqueIndex(count);
    jokes.forEach(jokeIndex => {
      const joke = yoMomma(jokeIndex);
      randomJokes.push({
        id: jokeIndex,
        type: 'yo-momma',
        setup: undefined,
        punchline: joke
      });
    });
    console.log('randomJokes length', randomJokes.length);
    return randomJokes;
  }
  if (numberOfJokes > MAX_JOKE_COUNT) {
    return fetchJokes(MAX_JOKE_COUNT);
  }
  return fetchJokes(numberOfJokes);
}

export { getRandomJoke, getRandomJokes, getYoMommaJoke, getYoMommaJokes };
