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
    res.send('<h1>Aula <h1>');
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
app.post('/tasks', (req, res) => {
  console.log('Dados recebidos no body:', req.body);
  res.json(req.body);
    if(error) {
    	console.log(error)
      return
              }
    res.send(rows)
db.query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
      connection.query(query, [title, description], (error, results) => {
      if (error) {
        console.error('Erro ao inserir no banco de dados:', error);
        return res.status(500).json({ error: 'Erro ao salvar a tarefa' });
      }
      res.status(201).json({ id: results.insertId, title, description }); // Retorne a nova tarefa criada
      });
    });

