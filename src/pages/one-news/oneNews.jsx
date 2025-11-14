import { useParams } from "react-router";
import React from "react";
import styles from "./one-news.module.css"

const OneNews = () => {
  const { desc } = useParams();
  const [singleNews, setSingleNews] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const response = await fetch("../../news.json");
      const data = await response.json();
      const [oneNews] = data.filter((el) => el.title === desc);
      setSingleNews(oneNews);
    })();
  }, [])

  return (
    <>
      {singleNews === null ?
        null :
        <div className={styles.news}>
          <h3 className={styles.news__title}>{singleNews.title}</h3>
          <div className={styles.news__content}>{singleNews.content}</div>
        </div>
      }
    </>
  )
}

export default OneNews;