import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { sendEmailToUser } from './sendEmailToUser.js';
// import connectionToDB from './config/dbConnection.js';

config();
const PORT = process.env.PORT || 5001;
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.post("/api/v1/sendemail", sendEmailToUser);

app.listen(PORT, async () => {
    // await connectionToDB();
    console.log(`App is running at http://localhost:${PORT}`);
})