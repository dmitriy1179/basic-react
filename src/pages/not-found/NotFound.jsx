import { NavLink } from "react-router"
import styles from "./not-found.module.css"

const NotFound = () => {
  return (
    <>
      <h1>Page not found. Error 404</h1>
      <NavLink to="/" className={styles.home__link}> 
        Go to home page
      </NavLink>
    </>
  )
}
export default NotFound
