import styles from "./blog.module.css";
export const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
      </section >
    </>
  )
}

export const BlogContent = () => {
  return (
    <>
      <ul className={styles.blogContent}>
        <li className={styles.blogContent__item}></li>
        <li className={styles.blogContent__item}></li>
        <li className={styles.blogContent__item}></li>
        <li className={styles.blogContent__item}></li>
      </ul>
    </>
  )
}

export const News = () => {
  return (
    <>
      <ul className={styles.news}>
        <li className={styles.news__item}></li>
        <li className={styles.news__item}></li>
        <li className={styles.news__item}></li>
      </ul>
    </>
  )
}

const Blog = ({ children }) => {
  return (
    <>
      <div className={styles.blog}>
        {children}
      </div>
    </>
  )
}

export default Blog;