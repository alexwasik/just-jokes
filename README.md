# Just Jokes

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/alexwasik/just-jokes)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub license](https://img.shields.io/github/license/alexwasik/just-jokes)](https://github.com/alexwasik/just-jokes/blob/main/LICENSE)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Description

A simple package for random jokes

## Installation

`npm install just-jokes`

## Usage

```
const JustJokes = require('just-jokes');
// or
const { randomJoke, randomJokes } = require('just-jokes);

// Get a random Joke
const joke = JustJokes.randomJoke();

// Get an array of jokes by number desired. Max 50
const jokes = JustJokes.randomJokes(10);
```

## Credit

Borrowed the jokes from [15Datz official_joke_api](https://github.com/15Dkatz/official_joke_api) repo which states:

> The majority of these jokes were contributed by joke-loving coders around the world!
