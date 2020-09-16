import React, { useState } from "react";
import styles from "./styles.module.css";
import Sider from "./layout/Sider";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./layout/Content";

function App() {
  const [siderOpen, setSiderOpen] = useState(false);

  const handleToggleSider = () => {
    setSiderOpen(prev => !prev);
  };

  return (
    <div className={styles.app}>
      <Router>
        <Sider onToggleSider={handleToggleSider} />
        <Content onToggleSider={handleToggleSider} siderOpen={siderOpen} />
      </Router>
    </div>
  );
}

export default App;
