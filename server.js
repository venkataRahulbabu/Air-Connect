import express from 'express';
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import cors from "cors"
import session from "express-session"
import MongoDBSession from 'connect-mongodb-session';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
app.use(bodyParser.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
})
    .catch((err) => {
        console.log(err);
    });

const MongoDBStore = MongoDBSession(session);
const PORT = 3000;

// Exported Models from models folder...
import UserModel from "./models/UserModel.js";


// Middlewares//
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", path.resolve("./views"));
// app.use(express.static("public"));


// Middleware to serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// const mongoURI = 'mongodb://localhost:27017/userDB';
/* const mongoURI = 'mongodb://127.0.0.1:27017/userDB';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((res) => {
        console.log("MongoDB Connected");
    }); */

//  Creating session store...
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "mySessions",
});

// Session middleware setup
app.use(
    session({
        secret: 'key that will assign cookie',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 2 * 24 * 60 * 60 * 1000,
        },
        store: store
    })
);

var userDetails;

// for storing session variables data....
var userPassingData = {};

// Session middleware...
const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next();
    } else {
        res.redirect("/");
    }
};

function capitalizeName(name) {
    return name
        .toLowerCase()  // Ensure the entire name is in lowercase
        .split(' ')      // Split by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
        .join(' ');      // Join the words back with spaces
}

// Get routes
app.get('/', (req, res) => {
    return res.render("login");
});

app.post('/', async function (req, res) {
    try {
        const { email, password } = req.body;
        const findByEmail = await UserModel.findOne({ email });
        if (!findByEmail) {
            return res.render("login", { isExist: true });
        }
        const isMatch = await bcrypt.compare(password, findByEmail.password);
        if (!isMatch) {
            return res.render("login", { passwordFlag: true, boolFlag: true, userFlag: false });
        }
        req.session.isAuth = true;
        userDetails = findByEmail;
        console.log(userDetails);

        req.session.userData = findByEmail;
        return res.redirect(`/get-flights`);
    } catch (error) {
        console.log(error.message);
        return res.render("error");
    }
});

app.get('/register', (req, res) => {
    return res.render("register");
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const findByEmail = await UserModel.findOne({ email });
        if (findByEmail) {
            return res.render("register", { isExist: true });
        }
        const hashPass = await bcrypt.hash(password, 12);
        const user = new UserModel({
            username,
            email,
            password: hashPass
        });
        await user.save();
        userDetails = findByEmail
        req.session.userData = findByEmail
        return res.redirect(`/login`);
    } catch (error) {
        return res.render("error");
    }
});

/* app.get('/index', isAuth, async function (req, res) {
    try {
        req.session.isAuth = true;
        req.session.userData = userDetails
        return res.render("index");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}); */

app.get('/airlines', isAuth, function (req, res) {
    try {
        userPassingData = req.session.userData;
        userPassingData.username = capitalizeName(userPassingData.username);
        return res.render("airlines", { userPassingData });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/get-flights', isAuth, function (req, res) {
    try {
        userPassingData = req.session.userData;
        userPassingData.username = capitalizeName(userPassingData.username);
        return res.render("getflights", { userPassingData });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/how-it-works', isAuth, function (req, res) {
    try {
        userPassingData = req.session.userData;
        userPassingData.username = capitalizeName(userPassingData.username);
        return res.render("working", { userPassingData });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/faqs', isAuth, function (req, res) {
    try {
        userPassingData = req.session.userData;
        userPassingData.username = capitalizeName(userPassingData.username);
        return res.render("faq", { userPassingData });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('/dashboard', isAuth, function (req, res) {
    try {
        userPassingData = req.session.userData;
        userPassingData.username = capitalizeName(userPassingData.username);
        console.log(req.session.userData);
        return res.render("dashboard", { userPassingData });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.get('*', function (req, res) {
    res.render('error');
});

// User logout route
app.post("/logout", isAuth, function (req, res) {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(PORT, () => console.log(`Server started at PORT:3000`));