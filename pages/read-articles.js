import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticleCard.module.css";

function readArticles({ articles }) {
  return (
    <div className={styles.articleContainer}>
      {articles.map((item, id) => {
        return <ArticleCard article={item} key={id} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("articles"));

  const articles = files.map((article) => {
    const markDownMetaData = fs.readFileSync(
      path.join("articles", article),
      "utf-8"
    );

    const { data: frontMatter } = matter(markDownMetaData);

    return {
      frontMatter,
      slug: article.split(".")[0],
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default readArticles;
