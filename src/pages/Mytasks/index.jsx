import React from 'react';

import './mytasks.css';
import './bootstrap.min.css';

import { Footer, Header } from '../../components/templates';

import classes from '../achievements/achievements.module.css';

import newOne from '../achievements/newOne.svg';

import { AgeAchievements } from '../../components/AgeAchievements/AgeAchievements';
import { Button } from '../../containers/Button/Button';

import search from './img/search.svg';
import icon_down from './img/icon_down.svg';

const ageAchievements = [
    [], [], [], [], [], [],
    [
        'выпустился с садика',
        'пошел в школу в 1 класс',
        'стал старостой класса',
    ],
    [], [], [], [], [], [], [], [], [], [],
    [
        'закончил школу с красным аттестатом',
        'поступил в университет на бюджет',
        'устроился на работу',
    ],
    [],
    [
        'перевестись на другой факультет',
        'купить первую машину',
        'сменить место работы',
    ],
];


export const Mytasks = () => (
    <appMytasks>
        <Header />
        <div className="my_tasks">
            <div className={classes.achievements}>
                <div className={classes.topPanel}>
                    <h2>Мои цели</h2>
                    <div className={classes.buttons}>
                        <Button>
                            <span>Фильтр</span>
                            <img src={icon_down} alt="" width="32" />
                        </Button>
                        <Button>
                            <span>Новая цель</span>
                            <img src={newOne} alt="" width="32" />
                        </Button>
                        <a href="#"><img src={search} alt="" /></a>
                    </div>
                </div>
                <div className={classes.ageAchievements}>
                    {
                        ageAchievements.map((achievements, age) => (
                            (achievements.length > 0)
                                ? (
                                    <AgeAchievements
                                        key={achievements}
                                        achievements={achievements}
                                        age={age + 1}
                                    />
                                )
                                : false
                        ))
                    }
                </div>

                <div>
                    {
                        ageAchievements.map((achievements, age) => (
                            (achievements.length == 0, age < 2)
                                ? (
                                    <AgeAchievements
                                        key={achievements}
                                        achievements={achievements}
                                        age={age + 25}
                                    />
                                )
                                : false
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer />
    </appMytasks>
)