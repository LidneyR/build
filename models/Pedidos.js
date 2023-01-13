const mongoose = require('mongoose')

const Pedidos = mongoose.model('Pedidos',{

    name:String,
    orders:Array, 

})

module.exports = Pedidos