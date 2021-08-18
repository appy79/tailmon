import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";


export default async (req, res) => {

  const {db} = await connectToDatabase();

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const member = await db.collection("members").findOne({ _id: ObjectId(id) });
        if (!member) {
          return res
            .status(400)
            .json({ success: false, data: "member not found" });
        }

        res.status(200).json({ success: true, data: member});
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const member = await db.collection("members").findOne({ _id: ObjectId(id) });
        if (!member) {
          return res
            .status(400)
            .json({ success: false, data: "member not found" });
        }
        const updateMember = await db.collection("members").updateOne( { _id: ObjectId(id) }, 
          { $set: req.body },
          { upsert: true }
          );
        res.status(200).json({ success: true, data: updateMember });
      } catch (error) {
        res.status(400).json({ success: false});
      }
      break;
    case "DELETE":
      try { 
        const member = await db.collection("members").findOne({ _id: ObjectId(id) });
        if (!member) {
          return res
            .status(400)
            .json({ success: false, data: "member not found" });
        }
        const deleteMember = await db.collection("members").deleteOne({ _id: ObjectId(id) });
        res.status(200).json({ success: true, data: member });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error)
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
