const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./data/news.json');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
   res.send('roaring dragon');
});

app.get('/categories', (req, res) => {
   res.send(categories);
});

//all news page
app.get('/news', (req, res) => {
   res.send(news);
});

//single news page
app.get('/news/:newsid', (req, res) => {
   const id = req.params.newsid;
   // console.log(id);
   const selectedNews = news.find(n => n._id === id);
   res.send(selectedNews);
});

//category based news page
app.get('/categories/:catid', (req, res) => {
   const id = req.params.catid;
   if (id == 0) res.send(news);
   else {
      const categoryNews = news.filter(n => n.category_id === id);
      res.send(categoryNews);
   }
});

app.listen(port, () => {
   console.log(`Dragon roaring at ${port}`);
})