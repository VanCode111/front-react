import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { LangButton, ThemeButton } from "../../atomic";
import LogoIcon from "./assets/logo.svg";
import OutIcon from "./assets/out.svg";

import styles from "./Header.module.css";

export const Header = ({ className, variant, ...props }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(className, styles.header, styles[`${variant}`])}
      {...props}
    >
      <div className={styles.container}>
        <img src={LogoIcon} alt="логотип" />
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.main")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.appName")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.goal")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.achievements")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.diary")}
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                {t("headers.profile")}
                <img src={OutIcon} alt="вход" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <LangButton className={styles.langButton} />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  className: PropTypes.string,
};
