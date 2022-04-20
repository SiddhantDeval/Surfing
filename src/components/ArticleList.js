import React from "react";

function ArticleList({ articles }) {
  if (!articles) {
    return <div>Loading...</div>;
  }

  if (articles.length === 0) {
    return <div> No articles are here... yet.</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <h1>{article}</h1>
      ))}
    </div>
  );
}
export default ArticleList;
