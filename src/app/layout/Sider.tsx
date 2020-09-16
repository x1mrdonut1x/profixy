import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { routes } from "../../constants";

function Sider({ onToggleSider }: any) {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    setActive(location.pathname.split("/")[1]);
  }, [location.pathname]);

  return (
    <aside className={styles.sider}>
      <div className={styles.user}>Viktor</div>
      <ul className={styles.listWrapper}>
        {routes.map(item => (
          <Link to={item.linkTo} onClick={onToggleSider}>
            <li className={classNames({ [styles.active]: item.linkTo === `/${active}` })}>
              {item.label}
            </li>
          </Link>
        ))}
        <div className={styles.divider} />
        <li>Sign Out</li>
      </ul>
    </aside>
  );
}

export default Sider;
