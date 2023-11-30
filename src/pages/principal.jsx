import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../components/principal.module.css';

function PrincipalPage() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    useEffect(() => {
        const cos = JSON.parse(localStorage.getItem('listaarticulos')) || [];
        if (cos.length === 0) {
            localStorage.setItem('listaarticulos', JSON.stringify(listaarticulos));
            setArticles([...listaarticulos]);
        } else {
            setArticles([...cos]);
        }
    }, []);

    const gotoadminpage = () => {
        navigate('/admin');
    };

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const startIdx = (currentPage - 1) * articlesPerPage;
    const endIdx = startIdx + articlesPerPage;
    const displayedArticles = articles.slice(startIdx, endIdx);


    return (
        <div className={styles.container}>
            <header className={styles.myheader}>
                <h2>MiTienda</h2>
                <button onClick={gotoadminpage}>
                    <h1>Soy Admin</h1>
                </button>
            </header>
            <div className={styles.container2}>
                <div className={styles.container3}>
                    {displayedArticles.map((article) => (
                        <div key={article.name} className={styles['article-container']}>
                            <img src={article.imageURL} alt={`Imagen de ${article.name}`} />
                            <p>Nombre del producto: {article.name}</p>
                            <p>Precio: {article.price}</p>
                        </div>
                    ))}
                    <div className={styles.pagination}>
                        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                            Anterior
                        </button>
                        <span>{`Página ${currentPage} de ${totalPages}`}</span>
                        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipalPage;