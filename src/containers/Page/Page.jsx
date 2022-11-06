import React from "react";
import PropTypes from "prop-types";

import { Header } from "../../components/templates/Header/Header";
import { Footer } from "../../components/templates/Footer/Footer";

import classes from "./Page.module.css";

export const Page = ({ children }) => (
  <div className={classes.wrapper}>
    <header className={classes.header}>
      <Header variant="secondary" />
    </header>
    <main className={classes.main}>{children}</main>
    <footer className={classes.footer}>
      <Footer />
    </footer>
  </div>
);

Page.propTypes = {
  children: PropTypes.element,
};
