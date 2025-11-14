import React from "react";
import styles from "./home.module.css";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <span>Full-width banner image</span>
      </section >
    </>
  )
}

const BlogContent = () => {
  const [blog, setBlog] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const response = await fetch("../../blog.json");
      const data = await response.json();
      setBlog(data);
    })();
  }, [])

  return (
    <>
      <section className={styles.blogContent}>
        <h2>Blog</h2>
        {blog === null ?
          null :
          <ul>
            {blog.map((el, index) => (
              <li className={styles.blogContent__item} key={index}>
                <NavLink className={styles.blogContent__link} to={`/blog/${el.title}`}></NavLink>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

const News = () => {
  const [news, setNews] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const response = await fetch("../../news.json");
      const data = await response.json();
      setNews(data);
    })();
  }, [])

  return (
    <>
      <section className={styles.news}>
        <h2>News</h2>
        {news === null ?
          null :
          <ul>
            {news.map((el, index) => (
              <li className={styles.news__item} key={index}>
                <NavLink className={styles.news__link} to={`/news/${el.title}`}></NavLink>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

const Home = ({ children }) => {
  return (
    <>
      <div className={styles.blog}>
        <Banner />
        <BlogContent />
        <News />
      </div>
    </>
  )
}

export default Home;