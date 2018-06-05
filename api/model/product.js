let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const productSchema

const productSchema = new Schema({
    name: {
        type: string,
        required: 'Le nom du produit doit ètre renseigne',
        unique: true
    },
    description: String,
    nbViews: Number,
    createdAt: Date,
    updatedAt: Date,
    publicateur: String
});