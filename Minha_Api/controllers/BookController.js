// Importando as dependências
const mongoose = require("mongoose");
// Referencia o model Books
const BooksModel = mongoose.model("Books");
// Vamos exportar um objeto com algumas funções
module.exports = {
  // Vai retornar todos os cursos de nosso banco de dados
  async index(req, res) {
    // Pega os parâmetros get da requisição
    const { page = 1 } = req.query;
    // Retorna os cursos de nosso banco de dados
    const books = await BooksModel.paginate({}, { page, limit: 10 });
    // Vamos retornar em formato JSON
    return res.json(books);
  },

  // Criar um novo curso
  async store(req, res) {
    const newBook = await BooksModel.create(req.body);
    // Vamos retornar o livro que criamos
    return res.json(newBook);
  },
  // Mostrar o detalhe de um curso
  async show(req, res) {
    const book = await BooksModel.findById(req.params.id);
    // Vamos retornar o livro que encontramos
    return res.json(book);
  },
  // Atualizar um curso
  async update(req, res) {
    // Procura um livro pelo ID e atualiza ele
    const updatedBook = await BooksModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Vamos retornar o livro que encontramos
    return res.json(updatedBook);
  },
  // Excluir um curso
  async delete(req, res) {
    await BooksModel.findByIdAndDelete(req.params.id);
    // Vamos retornar uma mensagem de sucesso sem conteúdo
    return res.send({ msg: "Registro apagado com sucesso!" });
  },
};
