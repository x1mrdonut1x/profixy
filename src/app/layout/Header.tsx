import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { routes } from "../../constants";
import { useLocation } from "react-router-dom";
import Menu from "../../components/Menu";

const getRoute = (pathname: string) => {
  const path = pathname.split("/")[1];
  const route = routes.find(r => r.linkTo === `/${path}`);
  if (route) return route.label.toUpperCase();
  return "";
};

function Header({ onToggleSider }: any) {
  const location = useLocation();
  const [header, setHeader] = useState(getRoute(location.pathname));

  useEffect(() => {
    setHeader(getRoute(location.pathname));
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div onClick={onToggleSider} className={styles.icon}>
        <Menu />
      </div>
      <div className={styles.title}>{header}</div>
    </header>
  );
}

export default Header;
