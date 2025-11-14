import React from "react";
import { NavLink } from "react-router";
import styles from "./blog.module.css";

const SinglePost = ({ title, content }) => {
  return (
    <>
      <li className={styles.blog__content}>
        <NavLink className={styles.blog__link} to={`/blog/${title}`}>
          <h4 className={styles.blog__title} >{title}</h4>
          <p className={styles.blog__desc}>{content}</p>
        </NavLink>
      </li>
    </>
  )
}

const Blog = () => {
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
      <h3 className={styles.title}>Blog</h3>
      {blog === null ?
        null :
        <ul className={styles.blog}>
          {blog.map((el, index) => (
            <SinglePost key={index} title={el.title} content={el.content} />
          ))}
        </ul>
      }
    </>
  )
}

export default Blog;