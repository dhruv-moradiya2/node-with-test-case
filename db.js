const { MongoClient } = require('mongodb');

const connectToMongoDB = async (uri = 'mongodb://localhost:27017') => {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
};

module.exports = { connectToMongoDB };
