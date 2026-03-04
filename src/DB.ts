// import {MongoClient} from "mongodb";
//
// const GetURL = () => {
//
//     return "mongodb://localhost:27017"
// }
//
// export async function Connect(data: string) {
//
//     const client = new MongoClient(GetURL())
//     await client.connect();
//
//     const db = client.db("app");
//     const coll = db.collection("owner");
//     await coll.insertOne({data: data});
//
//     await client.close();
//
// }