const mongoose = require('mongoose');

class Mongo {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect('mongodb+srv://cknguyenmanh:admin@cluster0.coj0a6e.mongodb.net/project_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        .then(() => {
            console.log('Database connection successful');
        })
        .catch(error => {
            console.log('Database connection error');
        });
    }
}

module.exports = new Mongo();