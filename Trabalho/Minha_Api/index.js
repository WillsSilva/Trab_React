// Importando as dependências do projeto
const express = require("express");
const mongoose = require("mongoose");
// Cria uma aplicação Express
const app = express();
const uri = "mongodb://127.0.0.1:27017";
mongoose.connect(uri, { dbName: 'db_IFRS', });
const db = mongoose.connection;
//trata os erros da conexão
mongoose.connection.on("error", function (err) {
    console.log("Erro na conexão Mongoose padrão: " + err);
});
//A conexão foi feita com sucesso
db.once("open", function () {
    console.log("Estamos conectados no banco de dados!");
});
//Define uma rota
app.get("/courses", (req, res) => {
    return res.send("Cursos do IFRS");
});
// Inicia o servidor na porta '3000'
app.listen(3000, () => {
    console.log("Exemplo de aplicativo ouvindo a porta 3000");
});