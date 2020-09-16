import React from "react";
import { Switch, Route } from "react-router-dom";
import Start from "../../pages/start/Start";
import classNames from "classnames";
import styles from "./styles.module.css";
import Header from "./Header";

function Content({ siderOpen, onToggleSider }: any) {
  return (
    <div
      className={classNames(styles.content, {
        [styles.siderOpen]: siderOpen,
      })}
    >
      <Header onToggleSider={onToggleSider} />
      <Switch>
        <Route path="/1" component={Start} />
      </Switch>
    </div>
  );
}

export default Content;
