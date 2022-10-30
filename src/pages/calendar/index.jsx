import React, { useState } from 'react';
import cn from 'classnames';
import { Footer, Header } from '../../components/templates';

import styles from './CalendarPage.module.css';
import { initialState } from './initialState';

export const CalendarPage = () => {
    const [years, setYears] = useState(initialState);
    const [currentAge, setCurrentAge] = useState(26);

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Календарь жизни</h1>
                <ul className={styles.list}>
                    {years.map(item => (
                        <li key={item.age}>
                            <button
                                className={cn(styles.item, {
                                    [styles.item_target]: item.isTarget,
                                    [styles.item_current]: item.age === currentAge,
                                    [styles.item_lived]: item.age < currentAge,
                                    [styles.item_unlived]: item.age > currentAge,
                                })}
                            >
                                <span className={styles.item__text}>{item.age}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <button className={styles.removeBtn}>
                        Убрать год
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5.5L27 27.5M5 27.5L27 5.5" stroke="#424242" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <button className={styles.addBtn}>
                        Добавить год
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 16.5H29M16 29.5V3.49999" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
