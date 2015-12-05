'use strict';

// Initialize process.env with .env from the project root. (Don't commit .env)
require('dotenv').config({silent: true});

// REQUIRE ====================================================================
var express = require('express');

// SETTUP =====================================================================
var app = express();
var port = process.env.PORT || 3000;
var subdir = process.env.NODE_ENV === 'production' ? '/dist' : '/build';

app.use(express.static(__dirname + subdir));

// SERVER INIT================================================================
app.listen(port, function() {
  console.log('\n ==================================\n' +
              ' = Server listening on port: ' + port + ' =' +
              '\n ==================================\n' +
              '\n ... NODE_ENV = ' + process.env.NODE_ENV + '\n');
});
