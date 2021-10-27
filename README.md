# emoji-syntax

## Introduction

This project was built to allow :emoji: syntax in Chrome.

## Usage

To run a development server that will watch for file changes and rebuild the scripts, run:

```
yarn start
```

To just build the files without the development server:

```
yarn build
```

Both commands will create a `dist/` directory, it will contain the built files that should be loaded into the browser or packed.

## Load into Chrome

To load the built files into Chrome, open [chrome://extensions/](chrome://extensions/).

Enable "Developer mode" if it's not enabled yet:

Click on "Load unpacked":

Find the `dist/` directory on your system and open it.

The extension should be now at the top of the page:

## Publishing

In the future will be [following the official docs](https://developer.chrome.com/webstore/publish) to add to the Chrome
Web Store.
