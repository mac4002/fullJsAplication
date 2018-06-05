const express = require('express');
const router = express.Router();
const Product1= require(__basedir + '/model/product.js');
const Product= Product1.Product;

router.route('/')
    .get(
        (req,res, next) => {
            Product.find(
                (err, products) => {
                    if(err) { 
                        console.log('Error');
                        next(err);}
                    else {
                        console.log('Success');
                        res.json(products);
                    }
                }
            );

    })
    .post(
        (req,res) => {
            Product.create(
                {
                    name:'Hamac' ,
                    price: 12.59,
                    introduction: 'Idea for se reposer aprés un semaine de fulljs',
                    nbViews: 11,
                    isPublished: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    publicateur:'Mac'
                },
                    (err, products) => {
                        if(err) { next(err);}
                        else {
                            res.json(products)
                        }
                    }
                
            )
        }

    )
    ;

module.exports = router;