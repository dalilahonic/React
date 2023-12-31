import { MongoClient } from 'mongodb';
//   /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, adress, description } = data;

    const client = await MongoClient.connect(
      process.env.MONGODB_URI
    );
    console.log(process.env.MONGODB_URI);

    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
