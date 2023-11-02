// To connect with your mongoDB database

import mongoose from 'mongoose';

const DB_URL = 'mongodb://127.0.0.1:27017/CAMEO';
mongoose.connect(DB_URL);
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('Successfully connected')
})
conn.on('error', (err) => {
    console.log(`Fail to connect ${err.message}`);
    process.exit();
})



// Schema for users of app
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})


const User = mongoose.model('users', UserSchema);
User.createIndexes();



import cors from 'cors';
import express from 'express';
const app = express();
app.listen(5000, () => {
    console.log('App listen at port 5000');

})

app.use(express.json());
app.use(cors());
app.get("/register", (req, res) => {

    res.send("<h1>Welcome to CAMEO</h1>");
});

app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        res.send("Something Went Wrong");
    }
    
});

// app.listen(5000);