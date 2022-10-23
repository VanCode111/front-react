import React from 'react';

import { AdminPage } from '../../containers/AdminPage/AdminPage';
import { AccountForm } from '../../components/AccountForm/AccountForm';

export const Account = () => (
    <AdminPage title={'Личный кабинет'}>
        <AccountForm />
    </AdminPage>
);
