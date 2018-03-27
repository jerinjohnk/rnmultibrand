# Multi-tenancy in React Native apps
## On a path to building multi-branding apps in React Native.
[![GitHub contributors](https://img.shields.io/github/contributors/jerinjohnk/rnmultibrand.svg?style=flat-square)](https://github.com/jerinjohnk/rnmultibrand/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/jerinjohnk/rnmultibrand/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/jerinjohnk/rnmultibrand.svg?style=flat-square)](https://github.com/jerinjohnk/rnmultibrand/issues)

## Intro

This repo is a practical implementation of ideas, discussed in the [Medium article](https://medium.com/@jerinjohnk/https-medium-com-jerinjohnk-multi-tenancy-in-react-native-316fe629890d), about creating a multi-branding app from a single source code file using [gulp](https://gulpjs.com/)

---

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/jerinjohnk/rnmultibrand.git

# Install dependencies
1) rnproject open a terminal
yarn

2) rnmultibrand(root) open a terminal
npm install gulp
```

#### 2.1 Run APP1
These steps are used to run the first flavor app1.
```bash
# Open Gulpfile.js change app flavor value
var appFlavor = "app1";

# Root folder terminal run
gulp start

# Run the app
react-native run-ios
or
react-native run-android
```

#### Gulp start
First creates an src folder -> copies main folder content -> overrides with selected app flavor -> starts a watcher that watches selected app folder for any changes.
If a file changes, it starts the overwrite task.

#### 2.2. Run APP2

```bash
# Open Gulpfile.js change appflavor value
var appFlavor = "app2";

# Close watcher if it's running
# Root folder terminal run
gulp start 
```
---

#### 3. Change App specific file
Try out changing any style, value etc present in the app folder for which watcher is running u will find the app updates during hot reload or on reload.

## Further Help?

This repo is a step towards creating multi-branding app in React Native. Right now have used gulp to automate this process.
Would improve the scripts and build process further once I have successfully implemented them. 
Any suggestions for the same would be greatly appreciated.

---

_If there are any other ideas presented in this repo, that you think worth mentioning - feel free open a pull request :)_
