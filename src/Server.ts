import express from 'express';

const SetupServer = () => {

    const app = express();
    const PORT = process.env.PORT || 5000 ;

    app.use(express.static("./public"))


    app.listen(PORT, () => {
        console.log("Listening " + `http://localhost:${PORT}`);
    })
}

SetupServer();