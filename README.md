# ![HighLighter](./app/images/Logo_contractVis.png) Web Extension

Buying a product or signing up for a service implicates a contract between the consumer and the merchant or provider.
The average web user is often worried about the possible consequences from such a contract.
They are worried in particular when they interact with a new web shop or when the general terms and conditions are updated.
However, each contract involves a multitude of legal text that is hard to read and understand.

**ContractVis HighLighter** provides sophisticated text visualization support for online shopping,
yet targets non-professional users in a casual context without training.

ContractVis HighLighter consists of three components:
* a web extension (this package),
* a [web app](https://github.com/fhstp/highlighter-webapp), and
* a [backend server](https://github.com/fhstp/highlighter-backend).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Tags**: Web Extension, TypeScript and Visual Studio Code

## Installation

	$ npm install

## Usage (npm)
run the npm scripts that are avialable:

Command | Effect
--- | ---
start | Runs `npm run dev:chrome` which will start the development and watch for the chrome browser
build | Runs `npm run build:chrome` which will make a production build for chrome store and .zip the package
build:chrome | Runs `gulp pack --production --vendor=chrome` which makes the same as the default build command
build:firefox | Runs `gulp pack --production --vendor=firefox` which packs it for firefox store
build:opera | Runs `gulp pack --production --vendor=opera` which packs it for opera store
build:edge | Runs `gulp pack --production --vendor=edge` which packs it for the edge store
dev | Runs `npm run dev:chrome` which bascially makes the extension ready for hot reloading in chrome
dev:chrome | Runs `gulp --watch --vendor=chrome` which lets the chrome browser watch for changes
dev:firefox | Runs `gulp --watch --vendor=firefox` which lets the firefox browser watch for changes
dev:opera | Runs `gulp --watch --vendor=opera` which lets the opera browser watch for changes
dev:edge | Runs `gulp --watch --vendor=edge` which lets the edge browser watch for changes
lint | Runs the standard linting process

**Hot Reloading**
In order to make the development easy, you have to drag and drop the dist/chrome folder into the extensions tab of chrome and run the `dev:chrome` script or gulp task.

**VS Code**
For VS Code there is a handy package available which is called [NPM Scripts](https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts). This will give you a visual tab on the bottom of your VS Code editor where you can click all the commands mentioned above.

## Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.
1. All ts-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

## Tasks

### Build

    $ gulp


| Option         | Description                                                                                                                                           |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--watch`      | Starts a livereload server and watches all assets. <br>To reload the extension on change include `livereload.js` in your bundle.                      |
| `--production` | Minifies all assets                                                                                                                                   |
| `--verbose`    | Log additional data to the console.                                                                                                                   |
| `--vendor`     | Compile the extension for different vendors (chrome, firefox, opera, edge)  Default: chrome                                                                 |
| `--sourcemaps` | Force the creation of sourcemaps. Default: !production                                                                                                |


### pack

Zips your `dist` directory and saves it in the `packages` directory.

    $ gulp pack --vendor=firefox

### Version

Increments version number of `manifest.json` and `package.json`,
commits the change to git and adds a git tag.


    $ gulp patch      // => 0.0.X

or

    $ gulp feature    // => 0.X.0

or

    $ gulp release    // => X.0.0


## Globals

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts. It will be set to `development` unless you use the `--production` option.


**Example:** `./app/background.ts`

```typescript
if(process.env.NODE_ENV === 'development'){
  console.log('We are in development mode!');
}
```

## Acknowledgments

This work is supported by the [Internet Foundation Austria (IPA)](https://www.netidee.at/)
via the netidee project [ContractVis](http://contractvis.fhstp.ac.at/) (no. 2116) and
by the [Austrian Research Promotion Agency (FFG)](https://www.ffg.at/praktika) via the Talente Praktika (no. 870062).

The web extension seed is based on
[https://github.com/mazamachi/generator-chrome-extension-kickstart-typescript](https://github.com/mazamachi/generator-chrome-extension-kickstart-typescript)
with elements from
[https://github.com/chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
.
