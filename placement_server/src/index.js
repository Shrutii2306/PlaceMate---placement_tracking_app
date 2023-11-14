require('./models/StudentUser')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const authRoutes =  require('./routes/authRoutes')
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = "mongodb+srv://sshrutissingh2002:mongodbpassword@cluster0.bmiyh2k.mongodb.net/?retryWrites=true&w=majority";
;
mongoose.connect(mongoUri);

mongoose.connection.on('connected',() => {

    console.log('connected to mongo instance');

});

mongoose.connection.on('error',err =>{
    console.error('error connecting to mongodb',err)
})

app.get('/', (req, ress) => {

    ress.send('Hi there!');

});

app.listen(3000, () => {

    console.log('llistiening og 3000');
})