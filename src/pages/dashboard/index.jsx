import React from "react";
import {
  HorizontalProgressBar,
  ListItem,
  VerticalProgressBar,
} from "../../components";

import { Card } from "../../containers";
import CircleChart from "../../components/CircleChart/CircleChart";

import styles from "./dashboard.module.css";

export const DashBoard = () => (
  <div>
    <Card className={styles.card}>
      <h3 className={styles.title}>Пол аудитории</h3>
      <HorizontalProgressBar
        className={styles.progressBar}
        color="#AB5DE9"
        label="М"
        maxValue={3000}
        curValue={2567}
      />
      <HorizontalProgressBar
        className={styles.progressBar}
        color="#F8D564"
        label="Ж"
        maxValue={3000}
        curValue={2076}
      />
    </Card>
    <Card className={styles.card}>
      <h3 className={styles.title}>Возраст аудитории:</h3>
      <div className={styles.bars}>
        <VerticalProgressBar color="#AB5DE9" label="до 18" percent={36} />
        <VerticalProgressBar color="#AB5DE9" label="18-21" percent={28} />
        <VerticalProgressBar color="#AB5DE9" label="21-35" percent={7} />
        <VerticalProgressBar color="#AB5DE9" label="35-60" percent={19} />
      </div>
    </Card>
    <Card className={styles.card}>
      <h3 className={styles.title}>ЦА:</h3>
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
    <Card className={styles.card}>
      <CircleChart
        colors={["rgb(171, 93, 233)", "rgb(248, 213, 100)"]}
        data={[1268, 2100]}
      />
    </Card>
  </div>
);
