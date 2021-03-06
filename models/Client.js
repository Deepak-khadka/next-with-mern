import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
});

const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);

export default Client;