import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

const CONNECTION_URL =  'mongodb://dastaan:prachi123@ac-71nql7o-shard-00-00.stmcmf0.mongodb.net:27017,ac-71nql7o-shard-00-01.stmcmf0.mongodb.net:27017,ac-71nql7o-shard-00-02.stmcmf0.mongodb.net:27017/?ssl=true&replicaSet=atlas-wiucup-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch(err => {
    console.log(err.message);
}
);
