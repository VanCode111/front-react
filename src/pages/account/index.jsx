import React from "react";

import { AdminPage } from "../../containers/AdminPage/AdminPage";
import { Card } from "../../containers";
import { CircleChart } from "../../components/atomic/CircleChart/CircleChart";
import { AccountChart } from "../../components/AccountChart/AccountChart";
import { AccountForm } from "../../components/AccountForm/AccountForm";
import { statistics } from "../../mock/account";
import classes from "./account.module.css";

export const Account = () => {
  const tasks = statistics?.tasks || 0;
  const goals = statistics?.goals || 0;

  return (
    <AdminPage title={"Личный кабинет"}>
      <AccountForm />
      <Card className={classes.graphicContainer}>
        <div className={classes.graphic}>
          <h2 className={classes.title}>Ваша активность</h2>
          <AccountChart activity={statistics.activity} />
        </div>
        <div className={classes.circleWrapper}>
          <h2 className={classes.title}>
            Соотношение глобальных целей и задач:
          </h2>
          <div className={classes.circleContainer}>
            <div className={classes.circleData}>
              <div className={classes.circleDataItem}>
                <div
                  className={classes.circle}
                  style={{ backgroundColor: "#F8D564" }}
                />
                Задачи
              </div>
              <div
                className={classes.circleDataItem}
                style={{ color: "rgba(66, 66, 66, 0.5)" }}
              >
                {goals}%
              </div>
              <div className={classes.circleDataItem}>
                <div
                  className={classes.circle}
                  style={{ backgroundColor: "#AB5DE9" }}
                />
                Цели
              </div>
              <div
                className={classes.circleDataItem}
                style={{ color: "rgba(66, 66, 66, 0.5)" }}
              >
                {tasks}%
              </div>
            </div>
            <CircleChart
              data={[tasks, goals]}
              colors={["#AB5DE9", "#F8D564"]}
              labels={["Телефон", "Компьютер"]}
            />
          </div>
        </div>
      </Card>
    </AdminPage>
  );
};
