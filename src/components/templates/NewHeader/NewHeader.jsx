import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { LangButton, ThemeButton } from "../../atomic";
import LogoIcon from "./assets/logo.svg";
import OutIcon from "./assets/out.svg";
import DotsIcon from "./assets/dots.svg";
import UserPhoto from "./assets/user.png";

import styles from "./NewHeader.module.css";

export const NewHeader = ({ className, variant, ...props }) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(className, styles.header, styles[`${variant}`])}
      {...props}
    >
      <div className={styles.container}>
        <div className={styles.flexWrapper}>
          <img src={LogoIcon} alt="логотип" />
          <Link to="/" className={styles.link}>{t("headers.main")}</Link>
        </div>
        <div className={styles.flexWrapper}>
          <Link to="/"><img src={UserPhoto} alt="пользователь" /></Link>
          <img src={DotsIcon} alt="ещё" />
        </div>
      </div>
    </div>
  );
};

NewHeader.propTypes = {
  className: PropTypes.string,
};
