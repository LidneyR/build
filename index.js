// config inicial
const express = require('express')
const app = express()

const mongoose = require('mongoose')  
const cors = require('cors')  

mongoose.set("strictQuery", true);  

 
app.use(
    express.urlencoded({    
      extended: true,
    }),
  )

app.use(express.json())

app.use((req,res,next)=>{
  console.log('marcha')
  res.header("Access-Control-Allow-Origin","*")
  app.use(cors())
  next();
})
 

const BD_USER='vadev'
const BD_PASS='cQYPhoK7VNkOWIxw'  
mongoose 
  .connect(
     `mongodb+srv://${BD_USER}:${BD_PASS}@cluster0.n7xrlxb.mongodb.net/dataFoodApp?retryWrites=true&w=majority`,
  )
    
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(777) 
  })  

  .catch((err) => console.log(err)) 

  app.get('/',(req,res)=>{
    res.json({msg:'Olá'})
  })
  

const PedidoROuter = require('./routes/routerPedidos') 
app.use('/pedidos',PedidoROuter)

// app.get('/pedidos',(req,res)=>{
//   res.json({msg:'pedidos'})
// })

app.get('/app',(req,res)=>{
  res.json({msg:'app'})
})



  // POP > http://localhost:777/sendOrders
  // GET > http://localhost:777/getOrders 

 