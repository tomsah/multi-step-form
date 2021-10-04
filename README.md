# Multi step form

My take on a multi step form using React, redux toolkit, react router dom,
Typescript, Jest and React testing library.

Through this project:

- I have explored, had fun and learned a tlot setting all the project config
  manually. I am aiming to reuse this base to start future project, and I will
  keep working to improve it.
- Work for the first time with redux toolkit, it was very nice and straight
  forwards to use.
- Exploring deeper with Typescript, I did not have a big exposure to it,
- Playing with a bit of CSS to make thing looking nice
- Using HTML5 validation form

## What next

there is a lot of missing pieces to this multistep form to be great

- Increasing the testing usage,
- Improve validation error
  - Creating a custom hook for field Validation (so can be tested)
- Make the multi step form configurable,
  - Probably using a custom hooks where you can pass options
- Get a 404 route
- Redirect to homepage if a user try to access step other than 1 via url
- persists state using localStorage
- improve typing across the app
- improve webpack config for prod

# Installing

#### Prerequisites

- [Git](https://git-scm.com/downloads)
- [npm](https://www.npmjs.com/get-npm) or
  [yarn](https://yarnpkg.com/getting-started/install)
- [Node.js](https://nodejs.org/en/) >= 6.x

1. In Terminal, clone the git project using
   `$ git clone https://github.com/tomsah/MyReads.git`.
2. Navigate to the root directory for the project.
3. Run the command `yarn` or `npm install` to install the necessary dependencies
4. Run the command `yarn start` or `npm run start` to start the server.

- This will automatically open the website in your browser, otherwise visit
  http://localhost:8080/

# File Structure

    ├── .husky              # pre commit, push, merge git hook script
    ├── build               # Compiled files
    ├── nodes_modules       # JS modules
    ├── src                 # Source files
    │   ├── components          # React component
    │   ├── config              # Route config for react router dom
    │   └── interfaces          # TypeScript interfaces
    │   └── slices              # redux toolkit slice
    │   └── styles              # style
    ├── utils               # Automated tests
    ├── LICENSE
    └── README.md

## Note about the Setup

We are only going to use `TypeScript` for type checking, and use `Babel` to do
the code transpilation.

## Scripts

- `build`: Compiling the app for production using our webpack prod config.
- `check-format`: Prettier checks if files have been formatted - no files
  change.
- `check-types`: Run the typescript compiler.
- `format`: Runs prettier and update files.
- `lint`: Runs eslint.
- `pre-commit`: Runs lint-staged - script used in husky pre-commit and pre-push.
- `prepare`: Script that will install husky for new dev that install the
  project.
- `prettier`: Based script with options for `check-format` & `format` to run
  prettier.
- `start`: Runs the app on development mode using our webpack dev config.
- `test`: run jest for unit test.
- `Validate`: Runs all the linting, runs all the building. It makes sure that
  this project is in a good state.

## Package utility

- `@babel/core`: The core Babel library.
- `@babel/plugin-transform-runtime` and `@babel/runtime`: Allow us to use the
  async and await JavaScript features.
- `@babel/preset-env`: Allow us to use the latest JavaScript features but still
  target browsers that don’t support them.
- `@babel/preset-react`: Enable Babel to transform React code into JavaScript.
- `@babel/preset-typescript`: Enables Babel to transform TypeScript code into
  JavaScript.
- `@reduxJS/toolkit`: The official, opinionated, batteries-included toolset for
  efficient Redux development.
- `@testing-library/jest-dom`: Provides a set of custom jest matchers that you
  can use to extend jest.
- `@testing-library/react`: React testing library is a very lightweight solution
  for testing React components.
- `fork-ts-checker-webpack-plugin` and
  `@types/fork-ts-checker-webpack-plugin`Enable Webpack process to type check
  the code. -> Webpack will inform us of any type errors.
- `@types/jest`: Contains type definitions for Jest.
- `@types/mini-css-extract-plugin`: Contains type definitions for
  mini-css-extract-plugin.
- `@types/postcss-preset-env`: Contains type definitions for postcss-preset-env.
- `@types/react`: Contains type definitions for React.
- `@types/react-dom`: Contains type definitions for react-dom.
- `@types/react-redux`: Contains type definitions for react-redux.
- `@types/react-router-dom`: Contains type definitions for react-router-dom.
- `@types/webpack-dev-server`: Types for the webpack-dev-server
- `@typescript-eslint/eslint-plugin`: This contains some standard linting rules
  for TypeScript code.
- `@typescript-eslint/parser`: Allows TypeScript code to be linted.
- `babel-loader`: Webpack plugin, allow Babel to transpile the React and
  TypeScript code into JavaScript
- ` clean-webpack-plugin`: plugin will clear out the build folder at the start
  of the bundling process.`
- `css-loader`: Css loader module for webpack.
- `eslint`: The core ESLint library
- `eslint-config-prettier` : Turns off all rules that are unnecessary or might
  conflict with Prettier - only Turn off Rules.
- `eslint-plugin-jsx-a11y`: Static AST checker for accessibility rules on JSX
  elements.
- `eslint-plugin-prettier`: Runs prettier as an eslint rule.
- `eslint-plugin-react`: Contains some standard linting rules for React code.
- `eslint-plugin-react-hooks`: Includes some linting rules for React hooks code.
- `eslint-webpack-plugin`: Enable the Webpack process to lint the code with
  ESLint -> Webpack will inform us of any linting errors.
- `html-webpack-plugin`: generate the HTML
- `husky`: Allow to run some git hook, we are using it for pre-commit to run our
  validating scripts.
- `jest`: Unit test library.
- `lint-staged`: Run linters against staged git files.
- `mini-css-extract-plugin`: Extracts CSS into separate files. Prod.
- `node-sass`: library that provides binding for Node.js to LibSass. TODO =>
  change to Dart-sass
- `npm-run-all`: Allow us to run multiple script in parallel.
- `path`: Node.JS path module.
- `postcss-loader`: Loader to process CSS with PostCSS.
- `postcss-preset-env`: Convert modern CSS into something most browsers can
  understand.
- `prettier`: Code formatter library.
- `react` : JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-redux`: React bindings for Redux.
- `react-router-dom`: DOM bindings for React Router.
- `sass-loader`: Loads a Sass/SCSS file and compiles it to CSS.
- `style-loader`: Style loader module for webpack, inject CSS into the DOM.
- `ts-loader`: TypeScript loader for webpack.
- `ts-node`: Allow webpack config files to use TypeScript.
- `typescript`: Type checking library.
- `typescript-plugin-css-modules`: CSS modules support for TypeScript.
- `webpack`: The core Webpack library, (contains its own types).
- `webpack-cli`: Webpack command line interface.
- `webpack-dev-server`: Webpack server use during development.

## Husky

this will run some of our script using git hook. we are using so far:

- `pre-push`: Check if the code is correctly typed, formatted and the app can
  build without error before pushing the code to the repo.
- `pre-commit`: Check if the code is correctly typed, formatted before every
  commit.
- `post-merge`: Runs `yarn` automatically after every pull to make sure any new
  dependency are up to date.

To use a new husky hook, you will have to create a new files for the hook you
want to use by running that command
` npx husky add .husky/[The name of the hook] '[list of script to be run]'`
