import styles from "./blog.module.css";
export const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <span>Full-width banner image</span>
      </section >
    </>
  )
}

export const BlogContent = () => {
  return (
    <>
      <section className={styles.blogContent}>
        <h2>Blog</h2>
        <ul>
          <li className={styles.blogContent__item}></li>
          <li className={styles.blogContent__item}></li>
          <li className={styles.blogContent__item}></li>
          <li className={styles.blogContent__item}></li>
        </ul>
      </section>
    </>
  )
}

export const News = () => {
  return (
    <>
      <section className={styles.news}>
        <h2>News</h2>
        <ul>
          <li className={styles.news__item}></li>
          <li className={styles.news__item}></li>
          <li className={styles.news__item}></li>
        </ul>
      </section>
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