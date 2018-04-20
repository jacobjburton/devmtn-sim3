require('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    controller = require('./controller');

const app = express();
app.use(express.json());

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING).then(db =>
{
    app.set('db', db);
});

app.use(session(
{
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}
));

app.post('/register', controller.registerUser);
app.post('/login', controller.loginUser);


app.listen(SERVER_PORT, () => 
{
    console.log(`Listeny McListenerson on port: ${SERVER_PORT}`);
});