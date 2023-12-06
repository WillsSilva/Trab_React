// Importar módulos necessários
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
// Define o schema do Curso
const CourseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Adiciona o plugin mongoosePaginate em nosso schema
CourseSchema.plugin(mongoosePaginate);
// Registra o model Course em nossa aplicação informando seu schema
mongoose.model("Books", CourseSchema);

