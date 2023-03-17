![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## Badges

TBD

# NativePlayground App

TBD

## Features

- Light/dark mode
- Cross platform
- Internationalization

## Roadmap

- TBC

## Tech Stack

**Client:** TypeScript, React, Native Base, React Navigation, i18n-js

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ToBeDefined`

## Run Locally

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

Run on the **iOS** simulator

```bash
  yarn run ios
```

Run on the **Android** simulator

```bash
  yarn run android
```

### Issues

#### adb

If you have problem with **adb** run

```
yarn run adb
```

#### Clear Cache

```
yarn run clean
```

#### Clear build folder

```
yarn run clean
```

#### Wipe node modules

```
yarn run clean
```

#### Clean all

```
yarn run clean-all
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

### Run tests in watch mode.

```bash
  yarn test:watch
```

### Run only related test. Script is used in staging flow.

```bash
  yarn test:staged
```

## Deployment

### Android

#### Debug

```bash
  yarn run bundle:android
```

#### Release

```bash
  yarn run release:android
```

### iOS

#### Debug

```bash
  yarn run bundle:ios
```

#### Release

```bash
  yarn run release:ios
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
