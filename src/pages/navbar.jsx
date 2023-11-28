import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../components/navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.myheader}>
            <div className={styles.navbarIzq}>
                <h1>Izquierda</h1>
            </div>
            <div className={styles.myLogo}>
                <h2>MiTienda</h2>
            </div>
            <div className={styles.navbarDer}>
                <button onClick={() => navigate("/admin")}>
                    <h1>Soy Admin</h1>
                </button>
            </div>

        </header>
    );
}


export default Navbar;
