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

import zigzag from './assets/zigzag.svg';
import human from './assets/manish.svg';
import blackHuman from './assets/human.svg';

import styles from './dashboard.module.css';

export const DashBoard = () => (
    <div className={styles.dashboard}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <main>
            <h1 className={styles.heading}>Статистика</h1>
            <div className={styles.mainStatistics}>
                <MainCard className={styles.mainCardViolet}>
                    <h3 className={styles.mainName}>
                        Кол-во зарегистрированных пользователей:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>4040</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardYellow}>
                    <h3 className={styles.mainName}>
                        Кол-во пользователей на сайте:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>2050</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardGreen}>
                    <h3 className={styles.mainName}>
                        Кол-во пользователей в приложении:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>1040</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
                <MainCard className={styles.mainCardViolet}>
                    <h3 className={styles.mainName}>
                        Кол-во регистраций на сайте:
                    </h3>
                    <img src={zigzag} alt="Зигзаг" className={styles.mainZigzag} />
                    <div className={styles.mainCount}>
                        <span className={styles.mainNumber}>3040</span>
                        <img src={human} alt="" />
                    </div>
                </MainCard>
            </div>
            <div className={styles.secondaryItems}>
                <Card className={styles.circleCard}>
                    <h3 className={styles.title}>
                        Обхват по устройствам:
                    </h3>
                    <CircleChart data={[36, 64]} colors={['#AB5DE9', '#F8D564']} labels={['Телефон', 'Компьютер']} />
                    <div className={styles.percents}>
                        <div>
                            <ListItem color="#AB5DE9">Телефон</ListItem>
                            <span className={styles.value}>36%</span>
                            <span className={styles.value}>
                                1268
                                <img src={blackHuman} alt="" />
                            </span>
                        </div>
                        <div>
                            <ListItem color="#F8D564">Компьютер</ListItem>
                            <span className={styles.value}>64%</span>
                            <span className={styles.value}>
                                2100
                                <img src={blackHuman} alt="" />
                            </span>
                        </div>
                    </div>
                </Card>
                <Card className={styles.genderCard}>
                    <h3 className={styles.title}>
                        Пол аудитории
                    </h3>
                    <HorizontalProgressBar className={styles.progressBar} color="#AB5DE9" label="М" maxValue={3000} curValue={2567} />
                    <HorizontalProgressBar className={styles.progressBar} color="#F8D564" label="Ж" maxValue={3000} curValue={2076} />
                </Card>
                <Card className={styles.ageCard}>
                    <h3 className={styles.title}>
                        Возраст аудитории:
                    </h3>
                    <div className={styles.bars}>
                        <VerticalProgressBar color="#AB5DE9" label="до 18" percent={36} />
                        <VerticalProgressBar color="#AB5DE9" label="18-21" percent={28} />
                        <VerticalProgressBar color="#AB5DE9" label="21-35" percent={7} />
                        <VerticalProgressBar color="#AB5DE9" label="35-60" percent={19} />
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
                        <VerticalProgressBar color="#AB5DE9" percent={36} point />
                        <VerticalProgressBar color="#F8D564" percent={28} point />
                        <VerticalProgressBar color="#E89922" percent={7} point />
                        <VerticalProgressBar color="#C3EC5E" percent={19} point />
                        <VerticalProgressBar color="#F280B0" percent={6} point />
                    </div>
                </Card>
            </div>
        </main>
    </div>
);
