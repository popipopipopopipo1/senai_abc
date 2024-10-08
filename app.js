require("dotenv").config()
const db = require('./database.js');
const { table } = require("console");
const express = require("express")
const app = express()
const port = 8080
const path = require('path');


app.use(express.json());

app.get('/api-tester', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/rota', (req,res) => {
    console.log(process.env.DBHOST);
})

app.post('/rota', (req, res) => {
    console.log('Dados recebidos no body:', req.body);
    res.json({ message: 'Dados recebidos com sucesso!', body: req.body });
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
////30/09
app.get('/tasks/:id', (req, res) => {
	parametro1 = req.params.id
  db.query("SELECT * FROM tasks WHERE id = ?", parametro1, (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
})
app.get('/tasks', (req, res) => {
  db.query("SELECT * FROM tasks ORDER BY id ASC", (error, rows) => {
  	if(error) {
    	console.log(error)
      return
    }
    res.send(rows)
  })
})
/////1/10
app.post('/tasks', (req, res) => {
  const parametros = req.body
  console.log(parametros)
  db.query(`INSERT INTO tasks (titulo, descricao, status) VALUES ('${parametros.titulo}', '${parametros.descricao}', '${parametros.status}')`, (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
});

app.put('/tasks/:id', (req, res) => {
  const parametro1 = req.body
  console.log(parametro1)
  db.query(`UPDATE tasks SET titulo = '${parametro1.titulo}', descricao = '${parametro1.descricao}', status = '${parametro1.status}' WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
});

app.delete('/tasks/:id', (req, res) =>{
  const parametro2 = req.body
  console.log(parametro2)
  db.query(`DELETE FROM tasks WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
})

