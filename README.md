# Camper

## Background

Bandcamp is a great service but it can be difficult to hunt down what your looking for. This is not because of their search but because there's just so much music on the platform itself.

### Usage

1. `git clone https://github.com/chinjon/camper`
2. `cd camper`
3. `npm i`
4. `node index.js --t=<_GENRE_>`

### Testing

The project leverages the `jest` testing library due to its support for mocking the DOM.

1. `cd camper`
2. `npm run test`

***

### Todos

- [ ] Determine if Puppeteer is capable of performing downloads
- [ ] Determine the speed of Pupeeteer visiting links and returning to previous page
- [ ] Improve scraping with Puppeteer
