# Just Jokes

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/alexwasik/just-jokes)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub license](https://img.shields.io/github/license/alexwasik/just-jokes)](https://github.com/alexwasik/just-jokes/blob/main/LICENSE)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![npm](https://img.shields.io/npm/v/just-jokes)

## Description

A simple package to randomly generate jokes, including Yo Momma jokes!

## Installation

`npm install just-jokes`<br/>
or<br/>
`yarn add just-jokes`

## Usage

```
const {
  randomJoke,
  randomJokes,
  yoMommaJoke,
  yoMommaJokes,
} from ('just-jokes);

// Get a random Joke
const joke = randomJoke();
const yoMomma = yoMommaJoke();

// Get an array of jokes by number desired. Max 50
const jokes = randomJokes(10);
const yoMommas = yoMommaJokes(10)
```

**Return Values**

```
// random joke
{
  id: number
  type: string // "general" || "programming"
  setup: string
  punchline: string
}

// yoMomma
{
  id: number
  type: string // "yo-momma"
  setup: undefined
  punchline: string

}
```

## Credit

Forked random jokes from [15Datz official_joke_api](https://github.com/15Dkatz/official_joke_api)<br/>
YoMomma jokes provided by [Josh Buchea](https://github.com/joshbuchea/yo-mama)
