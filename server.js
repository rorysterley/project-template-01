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

// ROUTES ======================================================================

// --- API v1 ---
var testRoutesV1 = require('./routes/test_routes_v1');
var testRouterV1 = express.Router();
testRoutesV1(testRouterV1);
app.use('/api/v1', testRouterV1);

// --- API v2 ---
var testRoutesV2 = require('./routes/test_routes_v2');
var testRouterV2 = express.Router();
testRoutesV2(testRouterV2);
app.use('/api/v2', testRouterV2);

// SERVER INIT =================================================================
app.listen(port, function() {
  console.log('\n ==================================\n' +
              ' = Server listening on port: ' + port + ' =' +
              '\n ==================================\n' +
              '\n ... NODE_ENV = ' + process.env.NODE_ENV + '\n');
});
