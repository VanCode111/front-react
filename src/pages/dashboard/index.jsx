import React from "react";
import {
  HorizontalProgressBar,
  ListItem,
  VerticalProgressBar,
} from "../../components";

import { Card, MainCard } from "../../containers";

import { AdminPage } from "../../containers/AdminPage/AdminPage";

import zigzag from "./zigzag.svg";
import human from "./manish.svg";

import classes from "./dashboard.module.css";

export const DashBoard = () => (
  <div className={classes.dashboard}>
    <h2 className={classes.heading}>Статистика</h2>
    <div className={classes.mainStatistics}>
      <MainCard classNames={[classes.mainCardViolet]}>
        <h3 className={classes.mainName}>
          Кол-во зарегистрированных пользователей:
        </h3>
        <img src={zigzag} alt="Зигзаг" className={classes.mainZigzag} />
        <div className={classes.mainCount}>
          <span className={classes.mainNumber}>4040</span>
          <img src={human} alt="" />
        </div>
      </MainCard>
      <MainCard classNames={[classes.mainCardYellow]}>
        <h3 className={classes.mainName}>Кол-во пользователей на сайте:</h3>
        <img src={zigzag} alt="Зигзаг" className={classes.mainZigzag} />
        <div className={classes.mainCount}>
          <span className={classes.mainNumber}>2050</span>
          <img src={human} alt="" />
        </div>
      </MainCard>
      <MainCard classNames={[classes.mainCardGreen]}>
        <h3 className={classes.mainName}>Кол-во пользователей в приложении:</h3>
        <img src={zigzag} alt="Зигзаг" className={classes.mainZigzag} />
        <div className={classes.mainCount}>
          <span className={classes.mainNumber}>1040</span>
          <img src={human} alt="" />
        </div>
      </MainCard>
      <MainCard classNames={[classes.mainCardViolet]}>
        <h3 className={classes.mainName}>Кол-во регистраций на сайте:</h3>
        <img src={zigzag} alt="Зигзаг" className={classes.mainZigzag} />
        <div className={classes.mainCount}>
          <span className={classes.mainNumber}>3040</span>
          <img src={human} alt="" />
        </div>
      </MainCard>
    </div>
    <div className={classes.secondaryItems}>
      <div className={classes.itemsContainer}>
        <Card classNames={[classes.card]}>
          <h3 className={classes.title}>Пол аудитории</h3>
          <HorizontalProgressBar
            className={classes.progressBar}
            color="#AB5DE9"
            label="М"
            maxValue={3000}
            curValue={2567}
          />
          <HorizontalProgressBar
            className={classes.progressBar}
            color="#F8D564"
            label="Ж"
            maxValue={3000}
            curValue={2076}
          />
        </Card>
        <Card classNames={[classes.card]}>
          <h3 className={classes.title}>Возраст аудитории:</h3>
          <div className={classes.bars}>
            <VerticalProgressBar color="#AB5DE9" label="до 18" percent={36} />
            <VerticalProgressBar color="#AB5DE9" label="18-21" percent={28} />
            <VerticalProgressBar color="#AB5DE9" label="21-35" percent={7} />
            <VerticalProgressBar color="#AB5DE9" label="35-60" percent={19} />
          </div>
        </Card>
      </div>
      <Card classNames={[classes.card]}>
        <h3 className={classes.title}>ЦА:</h3>
        <ul className={classes.list}>
          <ListItem color="#AB5DE9">Учащийся</ListItem>
          <ListItem color="#F8D564">Бизнесмен</ListItem>
          <ListItem color="#E89922">Домохозяйка</ListItem>
          <ListItem color="#C3EC5E">...</ListItem>
          <ListItem color="#F280B0">...</ListItem>
        </ul>
        <div className={classes.bars}>
          <VerticalProgressBar color="#AB5DE9" percent={36} point />
          <VerticalProgressBar color="#F8D564" percent={28} point />
          <VerticalProgressBar color="#E89922" percent={7} point />
          <VerticalProgressBar color="#C3EC5E" percent={19} point />
          <VerticalProgressBar color="#F280B0" percent={6} point />
        </div>
      </Card>
    </div>
  </div>
);
