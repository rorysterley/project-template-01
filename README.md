# Project Template 01


## Local Development

These should be installed globally:
```
$ npm install -g nodemon
$ npm install -g gulp
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

## Notes:
Create a `.env` file at the project root. It will be read and its contents
added to `process.env`. Variables should take the form:<br>
```
NAME=value
FOO=bar
BAR=BLERG
BAZ_WHAT=forthJuncVal
```
