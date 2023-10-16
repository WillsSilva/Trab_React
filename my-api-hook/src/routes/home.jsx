import React, { useState } from 'react';
import { useFindBooks } from './useFindBooks';
import './App2.css';
import axios from 'axios';


const Home = () => {

    const { data, loading, error } = useFindBooks();
    const [selectedBook, setSelectedBook] = useState(null);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay error={error} />;

    const openBookCard = (book) => {
        setSelectedBook(book);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Lista de Livros</h1>
            <button id="Add">Adicionar</button>
            <ul className="book-list">
                {data &&
                    data.length > 0 &&
                    data.map((item) => (
                        <BookItem
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            onEdit={() => openBookCard(item)}
                            onDelete={() => onDeleteBook(item.id)} // Correção aqui
                        />
                    ))}
            </ul>
            {selectedBook && (
                <BookCard
                    title={selectedBook.title}
                    description={selectedBook.description}
                    onClose={() => setSelectedBook(null)}
                />
            )}
        </div>
    );
}

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <img src="https://media.tenor.com/6gHLhmwO87sAAAAj/gg.gif" alt="Loading" />
        </div>
    );
}

function ErrorDisplay({ error }) {
    return <div className="error-container">{error}</div>;
}

function BookItem({ title, description, onDelete, onEdit }) {
    return (
        <li className="book-item">
            <strong className="book-title">{title}:</strong> {description}
            <button onClick={onEdit} id="Editar">Editar</button>
            <button onClick={onDelete} id="Excluir">Excluir</button>
        </li>
    );
}

function BookCard({ title, description, onClose }) {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
}

function onDeleteBook(id) {
    // Implemente a lógica de exclusão do livro aqui
    axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then(response => {
            // Faça algo com a resposta, se necessário
            console.log(response.status);
        })
        .catch(error => {
            // Trate os erros, se houver
            console.error(error);
        });
}

export default Home;