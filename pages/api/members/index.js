import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res){
    const {db} = await connectToDatabase();

    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const members = await db.collection("members").find({}).toArray();

                res.status(200).json({ success: true, data: members });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const inserted = await db.collection("members").insertOne(req.body);
                let id = inserted.insertedId
                const member = await db.collection("members").findOne({ _id: id });
                res.status(201).json({ success: true, data: member});
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}