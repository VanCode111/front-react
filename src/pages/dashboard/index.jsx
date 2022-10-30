import React from 'react';
import {
    Header,
    HorizontalProgressBar,
    ListItem,
    VerticalProgressBar,
    Sidebar,
    CircleChart,
} from '../../components';

import { Card, MainCard } from '../../containers';
import { AdminPage } from '../../containers/AdminPage/AdminPage';

import zigzag from './assets/zigzag.svg';
import human from './assets/manish.svg';
import blackHuman from './assets/human.svg';

import styles from './dashboard.module.css';

const statistic = {
    registeredUsers: 4040,
    usersOnline: 2050,
    usersInApp: 1040,
    registrations: 3040,
    usersByDevice: {
        phone: 1268,
        computer: 2100,
    },
    gender: {
        men: 2567,
        women: 2076,
    },
    agePersentage: {
        before18: 36,
        from18To21: 28,
        from21To35: 7,
        from35To60: 19,
    },
    targetAudience: [
        36, 28, 7, 19, 6,
    ],
};

export const DashBoard = () => (
    <AdminPage>
        <div className={styles.dashboard}>
            <h1 className={styles.heading}>Статистика</h1>
            <div className={styles.mainStatistics}>
                <MainCard className={styles.mainCardViolet}>
                    <h3 className={styles.mainName}>
                        Кол-во зарегистрированных пользователей:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>{statistic.registeredUsers}</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardYellow}>
                    <h3 className={styles.mainName}>
                        Кол-во пользователей на сайте:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>{statistic.usersOnline}</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardGreen}>
                    <h3 className={styles.mainName}>
                        Кол-во пользователей в приложении:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>{statistic.usersInApp}</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardViolet}>
                    <h3 className={styles.mainName}>
                        Кол-во регистраций на сайте:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>{statistic.registrations}</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
            </div>
            <div className={styles.secondaryItems}>
                <Card className={styles.circleCard}>
                    <h3 className={styles.title}>
                        Обхват по устройствам:
                    </h3>
                    <CircleChart
                        data={
                            [
                                Math.round((statistic.usersByDevice.phone
                                / (statistic.usersByDevice.phone
                                + statistic.usersByDevice.computer)) * 100),
                                Math.round((statistic.usersByDevice.computer
                                / (statistic.usersByDevice.phone
                                + statistic.usersByDevice.computer)) * 100),
                            ]
                        }
                        colors={['#AB5DE9', '#F8D564']}
                        labels={['Телефон', 'Компьютер']}
                    />
                    <div className={styles.percents}>
                        <div>
                            <ListItem color="#AB5DE9">Телефон</ListItem>
                            <span className={styles.value}>
                                {
                                    Math.round((statistic.usersByDevice.phone
                                    / (statistic.usersByDevice.phone
                                    + statistic.usersByDevice.computer)) * 100)
                                }
                                %
                            </span>
                            <span className={styles.value}>
                                {statistic.usersByDevice.phone}
                                <img src={blackHuman} alt="" />
                            </span>
                        </div>
                        <div>
                            <ListItem color="#F8D564">Компьютер</ListItem>
                            <span className={styles.value}>
                                {
                                    Math.round((statistic.usersByDevice.computer
                                    / (statistic.usersByDevice.phone
                                    + statistic.usersByDevice.computer)) * 100)
                                }
                                %
                            </span>
                            <span className={styles.value}>
                                {statistic.usersByDevice.computer}
                                <img src={blackHuman} alt="" />
                            </span>
                        </div>
                    </div>
                </Card>
                <Card className={styles.genderCard}>
                    <h3 className={styles.title}>
                        Пол аудитории
                    </h3>
                    <HorizontalProgressBar className={styles.progressBar} color="#AB5DE9" label="М" maxValue={3000} curValue={statistic.gender.men} />
                    <HorizontalProgressBar className={styles.progressBar} color="#F8D564" label="Ж" maxValue={3000} curValue={statistic.gender.women} />
                </Card>
                <Card className={styles.ageCard}>
                    <h3 className={styles.title}>
                        Возраст аудитории:
                    </h3>
                    <div className={styles.bars}>
                        <VerticalProgressBar color="#AB5DE9" label="до 18" percent={statistic.agePersentage.before18} />
                        <VerticalProgressBar color="#AB5DE9" label="18-21" percent={statistic.agePersentage.from18To21} />
                        <VerticalProgressBar color="#AB5DE9" label="21-35" percent={statistic.agePersentage.from21To35} />
                        <VerticalProgressBar color="#AB5DE9" label="35-60" percent={statistic.agePersentage.from35To60} />
                    </div>
                </Card>
                <Card className={styles.targetCard}>
                    <h3 className={styles.title}>
                        ЦА:
                    </h3>
                    <ul className={styles.list}>
                        <ListItem color="#AB5DE9">Учащийся</ListItem>
                        <ListItem color="#F8D564">Бизнесмен</ListItem>
                        <ListItem color="#E89922">Домохозяйка</ListItem>
                        <ListItem color="#C3EC5E">...</ListItem>
                        <ListItem color="#F280B0">...</ListItem>
                    </ul>
                    <div className={styles.bars}>
                        <VerticalProgressBar color="#AB5DE9" percent={statistic.targetAudience[0]} point />
                        <VerticalProgressBar color="#F8D564" percent={statistic.targetAudience[1]} point />
                        <VerticalProgressBar color="#E89922" percent={statistic.targetAudience[2]} point />
                        <VerticalProgressBar color="#C3EC5E" percent={statistic.targetAudience[3]} point />
                        <VerticalProgressBar color="#F280B0" percent={statistic.targetAudience[4]} point />
                    </div>
                </Card>
            </div>
        </div>
    </AdminPage>
);
