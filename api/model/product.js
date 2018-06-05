//First Done, create the model / object class

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: 'Le nom du produit doit ètre renseigne',
        unique: true
    },
    price: Number,
    introduction: {
        type: String,
        required: 'Introduction obligatoire'
    },
    nbViews: Number,
    isPublished: Boolean,
    createdAt: {
        type: Date,
        required: "Date de creation obligatoire"
    },
    updatedAt: Date,
    publicateur: {
        type: String,
        required: "Publicateur obligatoire"
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;