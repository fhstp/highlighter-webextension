# Highlighter Web Extension

Based on:
[![Build Status](https://travis-ci.org/chibat/chrome-extension-typescript-starter.svg?branch=master)](https://travis-ci.org/chibat/chrome-extension-typescript-starter)

Web Extension, TypeScript and Visual Studio Code

## Required

* [node + npm](https://nodejs.org/) (Current Version)

## Optional

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following technologies

* TypeScript
* Webpack
* Moment.js
* jQuery
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src: TypeScript source files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build in watch mode

### terminal

```
npm run build
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory in the extensions tab of any browser and start the watch process. This will automatically update the extension everytime a change is made in the code.

