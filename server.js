const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
//const userdb = require('./models/user');
const apiRoutes = require('./routes/apiRoutes');
// const authRoutes = require('./routes/authRoutes');

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

process.env.NODE_ENV === 'production' ? app.use(express.static('client/build')) : app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/noterror404', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
)

app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log('server is up on port ' + PORT)
})

