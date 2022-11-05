import React from 'react';

import { AdminPage } from '../../containers/AdminPage/AdminPage';
import { Card } from '../../containers';
import { AccountChart } from '../../components/AccountChart/AccountChart';
import { AccountForm } from '../../components/AccountForm/AccountForm';
import { statistics } from '../../mock/account';
import { ChartCard } from '../../components/ChartCard/ChartCard';
import classes from './account.module.css';

export const Account = () => {
  return (
    <AdminPage title="Личный кабинет">
      <AccountForm />
      <Card className={classes.graphicContainer}>
        <div className={classes.graphic}>
          <h2 className={classes.title}>Ваша активность</h2>
          <AccountChart activity={statistics.activity} />
        </div>
        <ChartCard />
      </Card>
    </AdminPage>
  );
};
