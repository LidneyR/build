 
const router = require('express').Router() 
const Pedidos = require('../models/Pedidos') 




router.post('/', async (req,res)=>{
    
  const {name, orders, approved} = req.body

  if(!name){
    console.log(localStorage.getItem())
    res.status(422).json({error:'O nome é obrigador'})
  }
  const pedidos = {
    name,
    orders,
  }

  try {
    await Pedidos.create(pedidos)
    res.status(201).json({msg:'Pedido Enviado'})

  } catch (error){
     res.status(500).json({error:error})
  }

  
})

router.get('/',async (req,res)=>{
    try{
        const allOrders=await Pedidos.find()
        res.status(200).json({allOrders})

    }catch(error){
     res.status(500).json({error:error})

    }

})

  




module.exports = router
  
