# "Is it home time yet?" application

## Introduction
This is a training repository to teach some fundamentals about the JavaScript
ecosystem to new beginners. Things to learn from this mini-project will be:

* Utilizing NodeJS / NPM to install dependencies and tooling.
* Using NPM scripts to run tooling that compiles our script.
* Compiling and running our application via Webpack.
* Some ES2015 code such as module import/exports, template strings, classes,
arrow functions and more.

## Getting started
Simply install dependencies, run the build tools then start the server:

    npm install;
    npm run build;
    npm start;

After this, you should be able to visit the URL output in your console, and see
the application.

## Further questions (to be updated during the session)
### How does Webpack know to resolve dependencies into `node_modules`?
Essentially it will scan the current folder looking for the given path. If it's
not found, it will go through an array of other paths (e.g. `['node_modules']`)
to go looking for it.
