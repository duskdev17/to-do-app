const express = require('express');
const mongoose = require('mongoose');
const cors = reuqire('cors');

const app = express();

app.use(express.json());
app.use(cors());


