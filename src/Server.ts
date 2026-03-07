import express from 'express';
import * as path from "node:path";

const SetupServer = () => {

    const app = express();
    const PORT = process.env.PORT || 5000;
    app.use(express.static("./public/Pages"))


    app.listen(5000, () => {
        console.log("Listening " + `http://localhost:${PORT}`);
    });
}
SetupServer();