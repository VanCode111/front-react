import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import classes from './AgeAchievements.module.css';

import expand from './expand.svg';
import add from './add.svg';
import write from './write.svg';

export const AgeAchievements = ({ achievements, age }) => (
    <div className={classes.achievements}>
        <div className={classes.topPanel}>
            <button className={classes.age} type="button">
                <span>{`${age} лет`}</span>
                <img src={expand} alt="" width="40" />
            </button>
            <button type="button">
                <img src={add} alt="" width="32" />
            </button>
            <button type="button">
                <img src={write} alt="" width="32" />
            </button>
        </div>
        <ul>
            {
                achievements.map((element) => (
                    <li key={element}>{element}</li>
                ))
            }
        </ul>
    </div>
);

AgeAchievements.propTypes = {
    achievements: arrayOf(PropTypes.string),
    age: PropTypes.number,
};
