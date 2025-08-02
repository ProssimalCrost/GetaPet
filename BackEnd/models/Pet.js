const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema ({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weigth: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        }, 
        image: {
            type: Array,
            required: true
        },
        available: {
            type: Boolean   
        },
        user: Object,
         required: Object
        
    }, {timestamps: true},
),
)

module.exports = Pet 