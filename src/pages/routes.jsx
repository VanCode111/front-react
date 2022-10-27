import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import { Main } from './main';
import { DashBoard } from './dashboard';
import { Account } from './account';
import { Login } from './login';
import { CalendarPage } from './calendar';
import { About } from './about';

import Calendar from '../components/CalendarDark/Calendar';

const routes = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/dashboard',
        element: <DashBoard />,
    },
    {
        path: '/account',
        element: <Account />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/main',
        element: <Calendar />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/calendar',
        element: <CalendarPage />,
    }
];

export const AppRouter = () => {
    useTheme();
    const component = useRoutes(routes);

    return component;
};
