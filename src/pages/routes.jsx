import React, { createContext, useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import { Main } from './main';
import { DashBoard } from './dashboard';
import { Achievements } from './achievements';
import { Account } from './account';
import { Login } from './login';
import { CalendarPage } from './calendar';
import { About } from './about';
import { MyAccount } from './myacc';

import Calendar from '../components/CalendarDark/Calendar';

import { ThemeContext } from './context';

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
        path: '/achievements',
        element: <Achievements />,
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
    },
    {
        path: '/myacc',
        element: <MyAccount />,
    },
];

export const AppRouter = () => {
    const { theme, setTheme } = useTheme();
    const component = useRoutes(routes);

    const themeContext = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [setTheme, theme],
    );

    return (
        <ThemeContext.Provider value={themeContext}>
            {component}
        </ThemeContext.Provider>
    );
};
