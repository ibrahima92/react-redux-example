import React from "react";
import { connect } from "react-redux";

import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";
import { simulateHttpRequest } from "../store/actionCreators";

const Articles = ({ articles, saveArticle }) => (
  <div>
    <AddArticle saveArticle={saveArticle} />
    {articles.map(article => (
      <Article key={article.id} article={article} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveArticle: article => dispatch(simulateHttpRequest(article))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
