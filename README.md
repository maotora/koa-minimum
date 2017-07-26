## Koa bare minimum.

A boilerplate project for most packages I need to make a fast start with my
koa@next development.

#### Install

    npm install

#### Use gulp.

To run all tasks just use command

    gulp

Otherwise check on the `gulpfile.babel.js` to see which tasks you can run.

**NB** Gulp tasks are defined as exported functions.

#### NB++

I use `gulp-connect` for testing server & livereloading the whole gulp
project.

I use `gulp-nodemon` for server "serving", to a client who will type

    curl http://localhost:1337/

I will figure a way to remove one later, feel free to teach me how or
better a PR!

**The npm scripts still work tho**

#### Babelify

    npm run build:watch

#### Start Server

    npm run build:start

#### Watch tests

    npm run test:watch

#### Test route

With [httpie](https://github.com/jakubroztocil/httpie/)

    http localhost:1337

Or with curl (°ロ°)☝

    curl http://localhost:1337

### Contribution.

I accept contribution, issues and PRs even for a boilerplate project, so if you
think I'm doing something funny (as always), please give feedback.

**Peace!**
