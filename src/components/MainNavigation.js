import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/products">Products Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
