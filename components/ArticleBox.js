import React from "react";
import styles from "../styles/Article.module.css";

function ArticleBox({ children }) {
  return <div className={styles.articleBox}>{children}</div>;
}

export default ArticleBox;
