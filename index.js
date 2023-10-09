const express = require("express")
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

const app = express()
app.get('/', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000!")
})