const request = require('supertest');
const app = require('../index');

describe('Watchlist Service', () => {
  test('health check endpoint returns 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('get watchlist endpoint exists', async () => {
    const response = await request(app).get('/watchlist');
    expect(response.statusCode).not.toBe(404);
  });

  test('add to watchlist endpoint exists', async () => {
    const response = await request(app).post('/watchlist/add');
    expect(response.statusCode).not.toBe(404);
  });

  test('remove from watchlist endpoint exists', async () => {
    const response = await request(app).delete('/watchlist/remove');
    expect(response.statusCode).not.toBe(404);
  });
});
