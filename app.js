const express = require("express")
const app = express()
const port = 8080
const path = require('path');
app.use(express.json());

app.get('/api-tester', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/rota', (req,res) => {
    res.send('<h1>Aula <h1>')
})

app.post('/rota', (req, res) => {
    console.log('Dados recebidos no body:', req.body);
    res.json({ message: 'Dados recebidos com sucesso!', body: req.body });
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
