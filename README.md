<p align="center">
  An opinionated [Expo](https://docs.expo.dev) Bare Workflow template that will allow you to start a new React Native project quickly with TypeScript, Prettier, ESLint, and some custom configurations that will make development process better. 💖
</p>

<h1 align="center">Echobind Expo Bare Workflow TypeScript Template</h1>
<br>

## Quick start

1. Install [Expo CLI](https://docs.expo.dev/get-started/installation/) with `npm install --global expo-cli` or `yarn global add expo-cli`.
2. Create new React Native project with `expo init --template @echobind/expo-typescript`.
3. Change directory to your project's folder with `cd <your-project-name>`.
4. Run Metro Bundler with `yarn start`.
5. Build and run the project with `yarn ios` or `yarn android`.

Happy hacking! 🤓

## TODOs

- Contexts (any reusable ones)
- Common reusable UI components
- Expo splashscreen
- Hopefully some e2e testing

## Available commands

- `yarn start` - start Metro Bundler.
- `yarn ios` - build and run iOS.
- `yarn android` - build and run Android.
- `yarn lint`, `lint:fix` - check code for errors.
- `yarn g:<generator name>` - generate some code (see [package.json](./package.json) for specific scripts).
