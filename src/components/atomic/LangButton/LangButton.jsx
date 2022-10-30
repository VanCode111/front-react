import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Lang, allLangs } from './constants';
import TriangleIcon from './assets/triangle.svg';

import styles from './LangButton.module.css';

export const LangButton = ({ className, ...props }) => {
    const [lang, setLang] = useState(Lang.RU);
    const [isOpen, setIsOpen] = useState(false);
    const [otherLangs, setOtherLangs] = useState(() => allLangs.filter((lng) => lng !== lang));

    const dropDown = () => {
        setIsOpen((prev) => !prev);
    };

    const changeLang = (lang) => {
        setLang(lang);
        setOtherLangs(() => allLangs.filter((lng) => lng !== lang));
        setIsOpen(false);
    };

    return (
        <div className={cn(className, styles.wrapper)} {...props}>
            <button type="button" onClick={dropDown} className={styles.chooseButton}>
                <span className={styles.label}>{lang}</span>
                <img
                    src={TriangleIcon}
                    alt=""
                    className={cn(styles.triangleIcon, {
                        [styles.triangleIcon_open]: isOpen,
                        [styles.triangle_close]: !isOpen,
                    })}
                />
            </button>
            {isOpen
            && (
                <ul className={styles.list}>
                    {otherLangs.map((lang) => <li className={styles.langItem} key={lang}><button type="button" onClick={(e) => changeLang(lang)} className={styles.button}><span className={styles.label}>{lang}</span></button></li>)}
                </ul>
            )}
        </div>
    );
};

LangButton.propTypes = {
    className: PropTypes.string,
};
