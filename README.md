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
You may be prompted for which version of a library to use. If so, use the option for `angular#1.6.5`.

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

## Working pages
If the installation went smoothly, you should have a json server running and the website should have popped up. Here are a few places you can go.

Assuming the url is [http://localhost:3001](http://localhost:3001), you should be able to go to the following pages:
- Home @ [http://localhost:3001](http://localhost:3001)
- Welcome @ [http://localhost:3001/#/welcome/772485](http://localhost:3001/#/welcome/772485)
- Agenda @ [http://localhost:3001/#/agenda/772485](http://localhost:3001/#/agenda/772485)
- Full List @ [http://localhost:3001/#/noclist](http://localhost:3001/#/noclist)
