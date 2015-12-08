'use strict';

require('../../server.js');

var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;
var baseURL = 'localhost:' + (process.env.PORT || 3000) + '/api/v1';
var baseURL2 = 'localhost:' + (process.env.PORT || 3000) + '/api/v2';

// Tests ======================================================================
describe('API endpoints', function() {

  // Setup --------------------------------------------------------------------
  // before(function(done) {
  //
  //   done();
  // });

  // Tests --------------------------------------------------------------------

  // GET
  it('should get "hello world"', function(done) {
    chai.request(baseURL)
      .get('/test')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.test).to.eql('hello world');

        done();
      });
  });

  it('should get "hello world2"', function(done) {
    chai.request(baseURL2)
      .get('/test')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.test).to.eql('hello world2');

        done();
      });
  });
});
