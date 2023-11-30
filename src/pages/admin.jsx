import React, { useState } from 'react';

function AdminPage() {
    const [imageURL, setImageURL] = useState('');
    const [articleName, setArticleName] = useState('');
    const [articlePrice, setArticlePrice] = useState('');
    const [articles, setArticles] = useState([]);

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
            setArticles([...articles, { imageURL, name: articleName, price: articlePrice }]);
            setImageURL('');
            setArticleName('');
            setArticlePrice('');
        }
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;