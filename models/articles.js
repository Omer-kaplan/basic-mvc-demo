const articles = [
  { id: 1, title: "Hello", content: "world" },
  { id: 2, title: "Hello2", content: "world2" },
  { id: 3, title: "Hello3", content: "world3" },
];

function getArticles() {
  return articles;
}

function search(title) {
  const lowerTitle = title.toLowerCase();
  return articles.filter((atricle) =>
    atricle.title.toLowerCase().includes(lowerTitle)
  );
}

module.exports = {
  getArticles,
  search,
};
