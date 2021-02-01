var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('hello Narendra!new changes in your Node App', done);
 });
});