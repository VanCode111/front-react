import React from "react";
import { useRoutes } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import { Main } from "./main";
import { DashBoard } from "./dashboard";
import { Account } from "./account";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/account",
    element: <Account />,
  },
];

export const AppRouter = () => {
  useTheme();
  const component = useRoutes(routes);

  return component;
};
