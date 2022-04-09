const mongoose = require('mongoose');


module.exports = async () => {
    await mongoose.connect('mongodb://localhost:27017/bptg', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('BD is connected'))
        .catch((err) => console.log(`Error from config/mongoose.js ${err}`));
}

// const db = mongoose.connection;

// db.on('error', (err) => console.log(`Error from config/mongoose.js ${err}`));
// db.once('open', () => console.log('BD is connected'));

// bptg().catch(err => console.log(`Error from config/mongoose.js ${err}`))
