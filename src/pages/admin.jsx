import React, { useState } from 'react';

function AdminPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [articleName, setArticleName] = useState('');
    const [articlePrice, setArticlePrice] = useState('');
    const [articles, setArticles] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleArticleNameChange = (event) => {
        setArticleName(event.target.value);
    };

    const handleArticlePriceChange = (event) => {
        setArticlePrice(event.target.value);
    };

    const handleUpload = () => {
        if (selectedImage && articleName && articlePrice) {
            setArticles([...articles, { image: selectedImage, name: articleName, price: articlePrice }]);
            setSelectedImage(null);
            setArticleName('');
            setArticlePrice('');
        }
    };

    return (
        <div>
            <div>
                <input type="file" onChange={handleImageChange} />
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
                            src={URL.createObjectURL(article.image)}
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