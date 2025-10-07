const { connectToMongoDB } = require('./db');

describe('MongoDB Connection', () => {
  let client;

  afterEach(async () => {
    if (client) {
      await client.close();
    }
  });

  test('should connect to localhost MongoDB', async () => {
    client = await connectToMongoDB();
    expect(client).toBeDefined();
    expect(client.topology.isConnected()).toBe(true);
  });

  test('should handle connection errors', async () => {
    await expect(connectToMongoDB('mongodb://invalid:27017')).rejects.toThrow();
  });
});
