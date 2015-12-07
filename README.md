# Project Template 01


## Local Development

These should be installed globally:
```
$ npm install -g nodemon
$ npm install -g gulp
$ npm install -g mocha
$ npm install -g jshint
$ npm install -g jscs
```

## Tips

```
// jshint ignore:line

/* jshint ignore:start */
/* jshint ignore:end */
```
<br>
```
// jscs:disable
// code here is ignored by jscs
// jscs:enable
```

## Note:
Create a `.env` file at the project root. It will be read and its contents
added to `process.env`. Variables should take the form:<br>
```
NAME=value
NAME=value
```


## Note:
gulp-util implements its own environmental variables that can be used in the
command line. In the code:
* gutil.env.<key> === <some Key>
* In the cli use '--type <key>'
* Ex: $ gulp concat-css --type dist

## Deployment:

### .env
* create a `.env` file in the project root
* add `PORT=<port number you want>`
* add 'NODE_ENV=production'

### gulp
* run `$ gulp dist --type dist`
* start the server using you're method of choice... (cronjob, upstart, node...)
