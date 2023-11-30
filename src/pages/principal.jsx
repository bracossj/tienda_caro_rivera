import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../components/principal.module.css';

function PrincipalPage() {
    const navigate = useNavigate();

    const gotoadminpage = () => {
        navigate('/admin')
    }

    return (
        <div className={styles.container}>
            <header className={styles.myheader}>
                <h2>MiTienda</h2>
                <button onClick={gotoadminpage}><h1>Soy Admin</h1></button>
            </header>
            <div className={styles.container2}>
                <div className={styles.container3}>

                </div>
            </div>
        </div>
    )
}

export default PrincipalPage;