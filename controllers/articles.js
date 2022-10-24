const Article = require("../models/articles");

const index = (req, res) => {
  res.render("../views/articles", { articles: Article.getArticles() });
};

const search = (req, res) => {
  const title = req.query.title;
  res.render("../views/search", { articles: Article.search(title) });
};

module.exports = {
  index,
  search,
};
