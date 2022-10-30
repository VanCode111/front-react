import React from 'react';
import { CircleChart } from '../atomic';

import classes from './ChartCard.module.css';

export const ChartCard = () => (
    <div className={classes.circleWrapper}>
        <h2 className={classes.title}>Соотношение глобальных целей и задач:</h2>
        <div className={classes.circleContainer}>
            <div className={classes.circleData}>
                <div className={classes.circleDataItem}>
                    <div className={classes.circle} style={{ backgroundColor: '#F8D564' }} />
                    Задачи
                </div>
                <div className={classes.circleDataItem} style={{ color: 'rgba(66, 66, 66, 0.5)' }}>
                    64%
                </div>
                <div className={classes.circleDataItem}>
                    <div className={classes.circle} style={{ backgroundColor: '#AB5DE9' }} />
                    Цели
                </div>
                <div className={classes.circleDataItem} style={{ color: 'rgba(66, 66, 66, 0.5)' }}>
                    36%
                </div>
            </div>
            <CircleChart data={[36, 64]} colors={['#AB5DE9', '#F8D564']} labels={['Телефон', 'Компьютер']} />
        </div>
    </div>
);
