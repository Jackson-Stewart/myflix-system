const request = require('supertest');
const app = require('../index');

describe('Auth Service', () => {
  test('health check endpoint returns 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('login endpoint exists', async () => {
    const response = await request(app).post('/login');
    expect(response.statusCode).not.toBe(404);
  });

  test('signup endpoint exists', async () => {
    const response = await request(app).post('/signup');
    expect(response.statusCode).not.toBe(404);
  });
});
