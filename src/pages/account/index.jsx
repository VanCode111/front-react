import React from 'react';
import { useTranslation } from 'react-i18next';

import { AdminPage } from "../../containers/AdminPage/AdminPage";
import { Card } from "../../containers";
import { AccountChart } from "../../components/AccountChart/AccountChart";
import { AccountForm } from "../../components/AccountForm/AccountForm";
import { statistics } from "../../mock/account";
import { ChartCard } from "../../components/ChartCard/ChartCard";
import classes from "./account.module.css";

export const Account = () => {
    const { t } = useTranslation();

    return (
    <AdminPage title={t('adminAcc.heading')}>
        <AccountForm isAdmin />
        <Card className={classes.graphicContainer}>
        <div className={classes.graphic}>
            <h2 className={classes.title}>{t('adminAcc.activity')}</h2>
            <AccountChart activity={statistics.activity} />
        </div>
        <ChartCard />
        </Card>
    </AdminPage>
    );
};
