const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');

require('dotenv').config();

const app = express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
//'mongodb+srv://mayukhghosh:Mars2030@cluster0-6y2kd.gcp.mongodb.net/test?retryWrites=true&w=majority'
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const foodsRouter = require('./routes/food');
const usersRouter = require('./routes/users');

app.use('/food', foodsRouter);
app.use('/users', usersRouter);

var ser=app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports=ser;