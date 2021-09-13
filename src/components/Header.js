import React from 'react'
import style from '../css_modules/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className={style.header}>
            <button id={style.auth}>Login/ SignUp</button>
            <div class={style.logo}>
                <h1>RecipeX</h1>
            </div>
            <div className={style.follow}>
                <a href="https://www.instagram.com/dishant_1021/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/dishant_1021/"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/dishant_1021/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default Header
