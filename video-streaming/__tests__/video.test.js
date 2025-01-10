const request = require('supertest');
const app = require('../index');

describe('Video Streaming Service', () => {
  test('health check endpoint returns 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('video list endpoint exists', async () => {
    const response = await request(app).get('/videos');
    expect(response.statusCode).not.toBe(404);
  });

  test('single video endpoint exists', async () => {
    const response = await request(app).get('/videos/test-video');
    expect(response.statusCode).not.toBe(404);
  });
});
