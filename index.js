const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const PORT = 3000

//Configurando o Middleware
app.use(bodyparser.json())
app.use(express.static('public'))

//Servindo o arquivo HTML principal Raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/index.html'))
})

app.post('/api/agendamentos', (req, res) => {
    const { nome, data, hora } = req.body

    if (nome && data && hora) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT} `) // executanto com npm rum dev
})