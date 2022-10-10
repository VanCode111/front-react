import { useRoutes } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import { Main } from './main';

const routes = [
    {
        path: '/',
        element: <Main />,
    },
];

export const AppRouter = () => {
    useTheme();
    const component = useRoutes(routes);

    return component;
};
