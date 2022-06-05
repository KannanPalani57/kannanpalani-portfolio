import React from "react";
import styles from "../styles/ArticleCard.module.css";
import Link from "next/link";

function ArticleCard({ article }) {
  return (
    <div className={styles.articleBox}>
      <div className={styles.articleImg}>
        <img src={article.frontMatter.thumbnailUrl} alt={article.slug} />
      </div>

      <div className={styles.articleText}>
        <span>
          {article?.frontMatter?.date} /{" "}
          {article?.frontMatter?.tags?.map((i) => i)}
        </span>
        <Link href={"/article/" + article?.slug} passHref>
          <a className={styles.articleTitle}>{article.frontMatter.title}</a>
        </Link>
        <p>{article?.frontMatter?.description}</p>
        <Link href={"/article/" + article?.slug} passHref>
          <a className={styles.readMore}>Read more</a>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
