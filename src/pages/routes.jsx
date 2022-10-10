import { useRoutes } from 'react-router-dom';

import { Main } from './main';

const routes = [
    {
        path: '/',
        element: <Main />,
    },
];

export const AppRouter = () => {
    const component = useRoutes(routes);
    return component;
};
