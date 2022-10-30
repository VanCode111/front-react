import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { LangButton, ThemeButton } from '../../index';
import LogoIcon from './assets/logo.svg';
import OutIcon from './assets/out.svg';

import styles from './Header.module.css';

export const Header = ({ className, ...props }) => (
    <header className={cn(className, styles.header)} {...props}>
        <div className={styles.container}>
            <img src={LogoIcon} alt="логотип" />
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.item}><a className={styles.link} href="/">Главная</a></li>
                    <li className={styles.item}><a className={styles.link} href="/">Календарь жизни</a></li>
                    <li className={styles.item}><a className={styles.link} href="/">Цели</a></li>
                    <li className={styles.item}><a className={styles.link} href="/">Достижения</a></li>
                    <li className={styles.item}><a className={styles.link} href="/">Дневник</a></li>
                    <li className={styles.item}>
                        <a className={styles.link} href="/">
                            ЛК
                            <img src={OutIcon} alt="вход" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <LangButton className={styles.langButton} />
                <ThemeButton />
            </div>
        </div>
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};
