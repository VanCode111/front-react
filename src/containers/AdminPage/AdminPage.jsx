import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Header, Sidebar } from '../../components';

import classes from './AdminPage.module.css';

export const AdminPage = ({ children, title = null, disablePadding = false }) => (
    <div className={classes.wrapper}>
        <header className={classes.header}>
            <Header />
        </header>
        <aside className={classes.sidebar}>
            <Sidebar />
        </aside>
        <main className={cn({
            [classes.main]: !disablePadding,
        })}
        >
            {title && <h1 className={classes.title}>{title}</h1>}
            {children}
        </main>
        <footer className={classes.footer}>
            Календарь жизни, 2022
        </footer>
    </div>
);

AdminPage.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    disablePadding: PropTypes.bool,
};
