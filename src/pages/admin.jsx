import React, { useState, useEffect } from 'react';
import listaarticulos from '../components/articles.json';

function AdminPage() {
    const [imageURL, setImageURL] = useState('');
    const [articleName, setArticleName] = useState('');
    const [articlePrice, setArticlePrice] = useState('');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const cos = JSON.parse(localStorage.getItem('listaarticulos')) || [];
        if (cos.length == 0) {
            localStorage.setItem('listaarticulos', JSON.stringify(listaarticulos));
        } else {
            setArticles(cos)
        }
    }, []);

    const handleImageURLChange = (event) => {
        setImageURL(event.target.value);
    };

    const handleArticleNameChange = (event) => {
        setArticleName(event.target.value);
    };

    const handleArticlePriceChange = (event) => {
        setArticlePrice(event.target.value);
    };

    const handleUpload = () => {
        if (imageURL && articleName && articlePrice) {
            const newArticles = [...articles, { name: articleName, imageURL: imageURL, price: articlePrice }];
            setArticles(newArticles);

            setArticleName('');
            setImageURL('');
            setArticlePrice('');

            localStorage.setItem('listaarticulos', JSON.stringify(newArticles));
        }
    };

    const handleDelete = (index) => {
        const updatedArticles = [...articles];
        updatedArticles.splice(index, 1);
        setArticles(updatedArticles);
        localStorage.setItem('listaarticulos', JSON.stringify(updatedArticles));
    };

    return (
        <div>
            <div>
                <label>URL de la Imagen:</label>
                <input type="text" value={imageURL} onChange={handleImageURLChange} />
            </div>
            <div>
                <label>Nombre del Artículo:</label>
                <input type="text" value={articleName} onChange={handleArticleNameChange} />
            </div>
            <div>
                <label>Precio del Artículo:</label>
                <input type="text" value={articlePrice} onChange={handleArticlePriceChange} />
            </div>
            <button onClick={handleUpload}>Agregar Artículo</button>

            <div>
                <h2>Artículos</h2>
                {articles.map((article, index) => (
                    <div key={index}>
                        <img
                            src={article.imageURL}
                            alt={`Imagen ${index}`}
                            style={{ maxWidth: '200px', maxHeight: '200px', margin: '5px' }}
                        />
                        <p>Nombre: {article.name}</p>
                        <p>Precio: {article.price}</p>
                        <button onClick={() => handleDelete(index)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;