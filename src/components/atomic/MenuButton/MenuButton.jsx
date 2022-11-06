import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AvatarIcon from './assets/avatar.svg';
import StatisticItcon from './assets/statistic.svg';
import UsersIcon from './assets/users.svg';

import styles from './MenuButton.module.css';

export const MenuButton = ({
    link, type, className, ...props
}) => {
    const { t } = useTranslation();
    const img = {
        lk: AvatarIcon,
        statistics: StatisticItcon,
        users: UsersIcon,
    };

    const labels = {
        lk: t('sidebar.lk'),
        statistics: t('sidebar.statistics'),
        users: t('sidebar.users'),
    };

    return (
        <Link to={link} className={cn(styles.link, className)} {...props}>
            <img src={img[type]} alt={labels[type]} />
            <span className={styles.label}>{labels[type]}</span>
        </Link>
    );
};

// type = 'lk' | 'statistics' | 'users'

MenuButton.propTypes = {
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};
