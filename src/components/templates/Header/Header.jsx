import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { LangButton, ThemeButton } from '../../atomic';
import LogoIcon from './assets/logo.svg';
import OutIcon from './assets/out.svg';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = ({ className, ...props }) => (
    <div className={cn(className, styles.header)} {...props}>
        <div className={styles.container}>
            <img src={LogoIcon} alt="логотип" />
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.item}><Link className={styles.link} to="/">Главная</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/">Календарь жизни</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/">Цели</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/">Достижения</Link></li>
                    <li className={styles.item}><Link className={styles.link} to="/">Дневник</Link></li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            ЛК
                            <img src={OutIcon} alt="вход" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <LangButton className={styles.langButton} />
                <ThemeButton />
            </div>
        </div>
    </div>
);

Header.propTypes = {
    className: PropTypes.string,
};
