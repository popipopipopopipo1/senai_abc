const express = require ("express")
const app = express()
const port = 8080

app.get('/', (req,res)=>{
    res.send("teste")
})
app.listen(port,()=>{
    console.log("ta rodando")
})