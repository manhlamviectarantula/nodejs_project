const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: false
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: false,
        default: []
    },
    brand: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: false,
        default: 1
    },
    feedback: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    created_by: {
        type: String,
        required: true,
    },
    updated_by: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     oldPrice: {
//         type: Number,
//         required: true
//     },
//     thumbnail: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     stock: {
//         type: Number,
//         required: true
//     },
//     reviews: {
//         type: Array,
//         required: false,
//         default: []
//     },
//     images: {
//         type: Array,
//         required: false,
//         default: []
//     },
//     size: {
//         type: Array,
//         required: false,
//         default: []
//     },
//     count_sold: {
//         type: Number,
//         required: false,
//         default: 0
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     brand: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: Number,
//         required: false,
//         default: 0
//     },
//     created_by: {
//         type: String,
//         required: true,
//     },
//     updated_by: {
//         type: String,
//         required: false
//     },
//     created_at: {
//         type: Date,
//         default: Date.now
//     },
//     updated_at: {
//         type: Date,
//         default: Date.now
//     },
//     view: {
//         type: Number,
//         required: false,
//         defaul: 0
//     },
//     status: {
//         type: Number,
//         required: false,
//         default: 1
//     }
// })

// const Product = mongoose.model('Product', productSchema)

// module.exports = Product