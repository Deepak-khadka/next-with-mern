import connectToDatabase from "../../../db/mongodb";

export default async (req, res) => {

    const client = await connectToDatabase;
    const db = client.db("kathford");

    let users = await db.collection("users").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));

    res.json(users);
}