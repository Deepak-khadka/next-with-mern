import {MongoClient} from 'mongodb';

const MONGODB_URL = process.env.MONGODB_URL

let client
let connectToDatabase

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

client = new MongoClient(`${MONGODB_URL}`, options)
connectToDatabase = client.connect()

export default connectToDatabase