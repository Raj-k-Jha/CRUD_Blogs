const mongoose = require('mongoose');
const Product = require('./models/product');

const arr = [
    {
        name: 'Nature',
        img:'https://images.unsplash.com/photo-1566066055109-3792a5bd2590?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        desc:"In nature, nothing is perfect and everything is perfect. ..."
    },
    {
        name: 'Mountain',
        img:'https://images.unsplash.com/photo-1617764188354-9bf4806be0aa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        desc:"Heaven is under our feet as well as over our heads."
    },
  

]



function seedDB() {
    
    Product.insertMany(arr)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })

}

module.exports = seedDB;