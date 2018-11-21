const app = require('./');
const supertest = require('supertest');
const request = supertest(app.callback());

describe('leaks', () => {
  test('ok', done => {
    request.get('/').end((_, response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
