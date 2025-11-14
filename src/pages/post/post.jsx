import { useParams } from "react-router";
import React from "react";
import styles from "./post.module.css"

const Post = () => {
  const { title } = useParams();
  const [singlePost, setSinglePost] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const response = await fetch("../../blog.json");
      const data = await response.json();
      const [post] = data.filter((el) => el.title === title);
      setSinglePost(post);
    })();
  }, [])

  return (
    <>
      {singlePost === null ?
        null :
        <div className={styles.post}>
          <h3 className={styles.post__title}>{singlePost.title}</h3>
          <div className={styles.post__content}>{singlePost.content}</div>
        </div>
      }
    </>
  )
}

export default Post;