import { MongoClient } from 'mongodb'
/// api/new-meetup
// POST 


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.zpog7.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupscollection = db.collection('meetups');

        const result = await meetupscollection.insertOne(data)

        console.log(result);

        client.close();

        res.status(201).json({ message: 'meetup inserted!' });
    }
}

export default handler;