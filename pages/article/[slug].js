import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleHeader from "../../components/ArticleHeader";
import styles from "../../styles/Article.module.css";

const components = {};

const ArticlePage = ({ mdxSource, frontMatter, slug }) => {
  return (
    <div>
      <div className={styles.article}>
        <ArticleHeader frontMatter={frontMatter} />
      </div>
      <div className={styles.articleBody}>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const mdxFiles = fs.readdirSync(path.join("articles"));

  const mdxFilesPaths = mdxFiles.map((articleFile) => ({
    params: {
      slug: articleFile.replace(".mdx", ""),
    },
  }));
  return {
    paths: mdxFilesPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markDownMetaData = fs.readFileSync(
    path.join("articles", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markDownMetaData);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default ArticlePage;
