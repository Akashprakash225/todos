const express = require('express');
const app = express();
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Welcome To Home Page')
})
app.get('/todos', function (req, res) {
    res.json({data:"Get all Todos"})
  })
  app.post('/add', (req,res)=>{
    console.log(req.body)
    res.json({data:req.body})
  }
  )
  app.put('/update/:id',(req,res)=>{
    console.log(req.params.id , req.body)
    res.json({data:req.params.id});
  }
  )
  app.delete('/delete/:id',(req,res)=>{
    console.log(req.params)
    res.json({data:req.params})
  })

app.listen(3009 , ()=>{
    console.log("server is running on http://localhost:3009")
})