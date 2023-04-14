//dotenv cofig
const dotenv = require('dotenv');
dotenv.config();

//express config
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes');

//cors config
const cors = require('cors');
app.use(cors());
app.use(express.json());

//routes
import routes from './routes';
routes(app);

//config middleware
const session = require('express-session');

app.use(
    session({
        secret: 'Pedro',
        resave: false,
        saveUninitialized: true,
    })
);

const sessionMiddleware = (req, res, next) => {
    if (!req.session.data) {
        res.status(401).json('Sessão não encontrada!');
    } else {
        next();
    }
};

app.use(sessionMiddleware);

//server listen
app.listen(port, () => console.log(`it's working bro, in ${port}!`));
