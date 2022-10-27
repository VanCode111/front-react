import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import classes from './AdminPage.module.css';

export const AdminPage = ({ children, title = null, disablePadding = false }) => (
    <div className={classes.wrapper}>
        <header className={classes.header}>
            header content
        </header>
        <aside className={classes.sidebar}>
            sidebar content
        </aside>
        <main className={cn({
            [classes.main]: !disablePadding,
        })}
        >
            {title && <h1 className={classes.title}>{title}</h1>}
            {children}
        </main>
        <footer className={classes.footer}>
            footer
        </footer>
    </div>
);

AdminPage.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    disablePadding: PropTypes.bool,
};
