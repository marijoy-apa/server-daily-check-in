const express = require('express');
const mongoose = require('mongoose');

const app = express();


const mongoUri = 'mongodb+srv://m_habit_user:ZNrZEikaHiAw3buT@daily-check-in.fzgr2xp.mongodb.net/'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
})

mongoose.connection.on('error', (err) => {
    console.log('Error connection to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('listening on port 3000')
})