# ng-welcome-screen
This project is a demo to show how to run a temporary server to render data on the front end dynamically.


## Installation
```bash
git clone git@github.com:jbcoder/ng-welcome-screen.git
```

## 1. Setup
```bash
npm install
```
- install all npm and bower dependencies

**Note:** If `npm install` fails during dependency installation it will be likely caused by `gulp-imagemin`. In that case remove `gulp-imagemin` dependency from `package.json`, run `npm install` again and then install `gulp-imagemin` separately with following command: `npm install gulp-imagemin --save-dev`

## 2. Start Server
```bash
json-server --watch server\schedule_data.json
```

## 3. Watch files
Open another terminal and run this.
```bash
npm start
```
or
```bash
gulp
```
