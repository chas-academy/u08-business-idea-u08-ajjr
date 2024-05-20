const mongoose = require('mongoose');

const ParfumeSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter the name of the parfume'],
    },

    description: {
        type: String,
        required: [true, 'Please enter the price of the parfume'],

    },

    price: {
        type: Number,
        required: true,
        default: 0

    },

    Image: {
        type: String,
    }

});

const Parfume = mongoose.model('parfume', ParfumeSchema);

module.exports = Parfume;
