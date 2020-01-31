# Boilerplate of Redux architecture for React Projects with Redux-Saga and TypeScript

Ref: https://itnext.io/scalable-redux-architecture-for-react-projects-with-redux-saga-and-typescript-f6afe1dece9b

This repository is a boilerplate kit for Redux architecture for React Projects with Redux-Saga and TypeScript.

## Environment

```bash
$ node -v
v10.17.0
$ yarn -v
v1.19.2
```

- React: `16.12.0`
- TypeScript: `3.7.2`

## Dependencies

### For Application

- [redux](https://github.com/reduxjs/redux), [react-redux](https://github.com/reduxjs/react-redux)
  - Redux.
- [redux-saga](https://github.com/redux-saga/redux-saga)
  - An alternative side effect model for Redux app. This hooks Redux action in the middleware, which allows asynchronous operations.
- [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)

  - Typesafe utilities for `action-creators` in Redux.

### For Development

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - TypeScript ESLint.
- [enzyme, enzyme-adapter-react-16](https://github.com/airbnb/enzyme)
  - JavaScript testing utilities for React Components' output.
- [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)
  - Redux Saga testing utilities.
- [redux-logger](https://github.com/LogRocket/redux-logger)
  - Logger for Redux.

## How To Use

```bash
$ yarn
$ yarn start
```

## ESLint

This project is using [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). When you push your branch to remote ones, please run `yarn lint --fix` to comply to the code convention.

When you add a new library, please make sure its license is not [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.
