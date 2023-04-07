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

//server listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
