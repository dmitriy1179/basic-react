import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
    <header>
      <h1>Blog name</h1>
      <a className={styles.logo} href="#"></a>
      <nav>
        <ul className={styles.navbar}> 
          <li className={styles.navbar__item}><a href="#"></a></li>
          <li className={styles.navbar__item}><a href="#"></a></li>
          <li className={styles.navbar__item}><a href="#"></a></li>
          <li className={styles.navbar__item}><a href="#"></a></li>
          <li className={styles.navbar__item}><a href="#"></a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;