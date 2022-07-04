import Client from "../../../models/Client";

import dbConnection from "../../../db/dbConnection";
import connectToDatabase from "../../../db/mongodb";

dbConnection();

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                // const clients = await Client.find({});

                const client = await connectToDatabase;

                let db = client.db("kathford");

                const clients = await db.collection('clients').find({}).toArray();

                res.status(200).json({success: true, data: clients});
            }catch (error){
                console.log(error)
                res.status(500).json({success: false, error})
            }

    }
}