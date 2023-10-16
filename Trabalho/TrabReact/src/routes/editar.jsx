import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Editar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editedBook, setEditedBook] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then((response) => {
          setEditedBook(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsEditing(false);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = isEditing
      ? `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`
      : 'https://fakerestapi.azurewebsites.net/api/v1/Books';

    const method = isEditing ? 'put' : 'post';

    axios[method](apiUrl, editedBook)
      .then((response) => {
        console.log(response.status);
        handleSuccessfulSubmit(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSuccessfulSubmit = (responseData) => {
    setEditedBook({});
  };

  const formattedDate = editedBook.publishDate
    ? format(new Date(editedBook.publishDate), "yyyy-MM-dd'T'HH:mm")
    : '';

  return (
    <div className="edit-book-form">
      <h2>{isEditing ? 'Editar Livro' : 'Adicionar Livro'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name="title" value={editedBook.title || ''} onChange={handleInputChange} />

        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description" rows={5} value={editedBook.description || ''} onChange={handleInputChange} />

        <label htmlFor="title">Numero de páginas:</label>
        <input type="number" id="pages" name="pageCount" value={editedBook.pageCount || ''} onChange={handleInputChange}  min={0} step={1}/>

        <label htmlFor="excerto">Excerto:</label>
        <textarea id="excerto" name="excerpt" rows={10} value={editedBook.excerpt || ''} onChange={handleInputChange} />

        <label htmlFor="title">Data da publicação:</label>
        <input type="datetime-local" id="publishDate" name="publishDate" value={formattedDate} onChange={handleInputChange} />

        <button type="submit">{isEditing ? 'Salvar' : 'Adicionar'}</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default Editar;
