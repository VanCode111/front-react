import React from 'react';
import PropTypes from 'prop-types';

import classes from './Page.module.css';

export const Page = ({ children }) => (
    <div className={classes.wrapper}>
        <header className={classes.header}>
            header here
        </header>
        <main>
            {children}
        </main>
        <footer className={classes.footer}>
            Footer here
        </footer>
    </div>
);

Page.propTypes = {
    children: PropTypes.element,
};
