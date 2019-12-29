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

### Goals

Not really certain at this point. The original intention was to somehow create a database from Bandcamp, which is lacking a public API.

Bandcamp's UI/UX, historically (at least for me) hasn't been the friendlist in terms of augmenting serendipity, and a few hoops are required to jump through to really be a power searcher.

However, in the past few months, they've made noticable strides with their layouts and it's been much better at discovering new music.

***

### Todos

- [ ] Create tests for `Puppeteer` modules
- [ ] Determine if `Puppeteer` is capable of performing downloads
- [ ] Determine the speed of `Pupeeteer` visiting links and returning to previous page
- [ ] Improve scraping with `Puppeteer`
