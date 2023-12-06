// Importar módulos necessários
const mongoose = require("mongoose");
// Define o schema do Curso
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Registra o model Course em nossa aplicação informando seu schema
mongoose.model("Course", CourseSchema);