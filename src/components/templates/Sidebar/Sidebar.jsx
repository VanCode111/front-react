import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { MenuButton } from '../../atomic';

import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }) => (
    <aside className={styles.sidebar} {...props}>
        <MenuButton link="/" type="lk" />
        <MenuButton link="/" type="statistics" />
        <MenuButton link="/" type="users" />
    </aside>
);

Sidebar.propTypes = {
    className: PropTypes.string,
};
