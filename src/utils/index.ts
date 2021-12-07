import jokes from '../jokes/jokes.json';

const getRandomJoke = () => {
  const randomIndex: number = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

export { getRandomJoke };
