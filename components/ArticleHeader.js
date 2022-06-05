import React from "react";
import Image from "next/image";
import styles from "../styles/Article.module.css";

function ArticleHeader({ frontMatter: { title, date, thumbnailUrl, tags } }) {
  return (
    <div className={styles.articleHeader}>
      <span className={styles.dateTags}>
        {date} / {"  "}
        {tags?.map((i) => i)}
      </span>
      <h1>{title}</h1>

      {/* <p>{date}</p> */}
      <div>
        <Image
          loader={() => thumbnailUrl}
          src={thumbnailUrl}
          alt={title}
          width={700}
          height={400}
        />
      </div>
    </div>
  );
}

export default ArticleHeader;
