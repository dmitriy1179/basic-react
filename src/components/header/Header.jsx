import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.header__title}>Blog name</h1>
        <a className={styles.header__logo} href="#"></a>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <NavLink to="/" className={styles.navbar__link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={styles.navbar__link}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/news" className={styles.navbar__link}>News</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;