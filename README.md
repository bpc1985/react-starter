React Starter
=========================

## About

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React Router](https://github.com/reactjs/react-router)
- [React CSS modules](https://github.com/gajus/react-css-modules)
- [PostCSS](https://github.com/postcss/postcss)
- [Redux-connect](https://github.com/makeomatic/redux-connect)
- [React-helmet](https://github.com/nfl/react-helmet)
- Server Side Rendering
- Api server on other port (express)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Sinon](http://sinonjs.org/)
- Others:
  - [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)
  - api + [promise](https://www.npmjs.com/package/redux-promise-middleware) middleware
  - vendor bundle
  - async pages
  - webpack resolving alias
  - 4 modes for run (with auto rimraf dist)
  - api server
  - gzip css, js, fonts

## How it works

See commentaries in code

## Installation

Install [rimraf](https://github.com/isaacs/rimraf): ```$ npm install rimraf -g```<br />
Install [nodemon](https://github.com/remy/nodemon): ```$ npm install nodemon -g```<br />
Install [concurrently](https://github.com/kimmobrunfeldt/concurrently): ```$ npm install -g concurrently```

## Start development

```$ npm run api```

```$ npm run start```

after: open 'http://localhost:3000' in browser<br /><br />
hint: use this mode for development

## Start production

```$ npm run build```

```$ npm run api:prod```

```$ npm run start:prod```

after: open 'http://localhost' in browser<br /><br />
hint: use this mode for production on server (without server-side-rendering)

## Run tests

```$ npm run test```

## License

MIT