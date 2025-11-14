import React from "react";
import { NavLink } from "react-router";
import styles from "./news.module.css"

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
      <h3 className={styles.title}>News</h3>
      {news === null ?
        null :
        <ul className={styles.news}>
          {news.map((el, index) => (
            <li className={styles.news__content} key={index}>
              <NavLink className={styles.news__link} to={`/news/${el.title}`}>
                <h4 className={styles.news__title} >{el.title}</h4>
                <p className={styles.news__desc}>{el.content}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      }

    </>
  )
}

export default News;