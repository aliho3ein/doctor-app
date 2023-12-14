// import { Link } from "react-router-dom";
import { RouterType } from "../model/routerType";
import { pageList } from "../pages/App";
import styles from "./../style/navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.mainNavbar} id="home">
      <ul>
        {pageList.map((page: RouterType, i) => (
          <li key={i} title={page.title}>
            {/* <Link to={page.path}>{page.title}</Link> */}
            <a href={`#${page.path}`}>{page.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
