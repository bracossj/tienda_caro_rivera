import React, { useState, useEffect } from 'react';
import listaarticulos from '../components/articles.json';
import styles from '../components/admin.module.css';

function AdminPage() {
    const [imageURL, setImageURL] = useState('');
    const [articleName, setArticleName] = useState('');
    const [articlePrice, setArticlePrice] = useState('');
    const [articles, setArticles] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingName, setEditingName] = useState('');
    const [editingImageURL, setEditingImageURL] = useState('');
    const [editingPrice, setEditingPrice] = useState('');

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

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditingName(articles[index].name);
        setEditingPrice(articles[index].price);
        setEditingImageURL(articles[index].imageURL);
    };

    const handleUpdate = () => {
        if (editingIndex !== null) {
            const updatedArticles = [...articles];
            updatedArticles[editingIndex] = {
                ...updatedArticles[editingIndex],
                name: editingName,
                price: editingPrice,
                imageURL: editingImageURL,
            };
            setArticles(updatedArticles);
            setEditingIndex(null);
            setEditingName('');
            setEditingPrice('');
            setEditingImageURL('');
            localStorage.setItem('listaarticulos', JSON.stringify(updatedArticles));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <label>URL de la Imagen:</label>
                <input type="text" value={imageURL} onChange={handleImageURLChange} />
                <label>Nombre del Artículo:</label>
                <input type="text" value={articleName} onChange={handleArticleNameChange} />
                <label>Precio del Artículo:</label>
                <input type="text" value={articlePrice} onChange={handleArticlePriceChange} />
                <button className={styles.addButton} onClick={handleUpload}>Agregar Artículo</button>
            </div>
            <div className={styles.tableContainer}>
                <h2>Artículos</h2>
                {articles.map((article, index) => (
                    <div className={styles.tableRow} key={index}>
                        <div className={styles.tableCell}>
                            {editingIndex === index ? (
                                <input
                                    type="text"
                                    value={editingImageURL}
                                    onChange={(e) => setEditingImageURL(e.target.value)}
                                />
                            ) : (
                                <img
                                    src={article.imageURL}
                                    alt={`Imagen ${index}`}
                                    className={styles.tableImage}
                                />
                            )}
                        </div>
                        <div className={styles.tableCell}>
                            {editingIndex === index ? (
                                <input
                                    type="text"
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                />
                            ) : (
                                <p>{article.name}</p>
                            )}
                        </div>
                        <div className={styles.tableCell}>
                            {editingIndex === index ? (
                                <input
                                    type="text"
                                    value={editingPrice}
                                    onChange={(e) => setEditingPrice(e.target.value)}
                                />
                            ) : (
                                <p>${article.price}</p>
                            )}
                        </div>
                        <div className={styles.tableCell}>
                            {editingIndex === index ? (
                                <button className={styles.updateButton} onClick={handleUpdate}>Actualizar</button>
                            ) : (
                                <button className={styles.editButton} onClick={() => handleEdit(index)}>Editar</button>
                            )}
                        </div>
                        <div className={styles.tableCell}>
                            <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;