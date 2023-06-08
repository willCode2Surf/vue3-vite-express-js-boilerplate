# vue3-vite-express-js-boilerplate

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Summary

Getting lost in all of the frameworks and opinions about development experience is a complete distraction from the actual work that needs to get done. Very often it is necessary to have a boilerplate stack that lays out some simple structure while enabling all the modern tooling needed to build awesome apps.

This stack is a goto for me to clone and use a baseline application to rapidly create applications.

## Getting Started

Since this is a Node project, you must run the following command after cloning the repo:

```bash
npm install
```

Once the project has been cloned, and the dependencies have been installed we can run the application.

```bash
npm run start
```

This will build the distro content and run the server. The configuration details, including port number, can be modified in the /config folder.

### What it do

- Use Vue3 compisition API approach with Vite
- Express routes for backend calls
- Websocket support with composables
- Base starter spot for rapidly prototyping
- Prettier and Husky for clean code
- Containerized with Docker for distro

### What it does NOT do

- Use a ton of dependencies or additional frameworks
- Production ready, this can be promoted to a production stack with additional security work
