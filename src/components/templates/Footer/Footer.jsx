import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoIcon from './assets/logo.svg';

import styles from './Footer.module.css';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__links}>
                    <img width={112} height={112} src="images/logo.svg" alt="Logo" />
                    <ul>
                        <li>
                            <Link to="#">{t('footer.download')}</Link>
                        </li>
                        <li>
                            <Link to="#">{t('footer.about')}</Link>
                        </li>
                        <li>
                            <Link to="#">{t('footer.feedback')}</Link>
                        </li>
                        <li>
                            <Link to="#">{t('footer.webVersion')}</Link>
                        </li>
                        <li>
                            <Link to="#">{t('footer.partners')}</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.project}>
                    <p>@{t('footer.name')} 2022</p>
                    <p>{t('footer.phrase')}</p>
                </div>
            </div>
        </footer>
    );
}