const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
let posts = {}
let postsPreview = {}
let requestedPost 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => { 
  for (var title in posts) { 
    postsPreview[title] = posts[title].slice(0, 100)
    if (posts[title].length > 100) {
      postsPreview[title] = postsPreview[title] + "..."  
    }
  }
  res.render('home', {posts: postsPreview})
})

app.get('/compose', (req, res) => { 
  res.render('compose')
})

app.post('/compose', (req, res) => {
  let postTitle = req.body.title
  let postContent = req.body.newPost 
  posts[postTitle.toLowerCase()] = postContent
  res.redirect('/')
})

app.get('/post/:postName', (req, res) => {
  let postFound = false
  let requestedPost = req.params.postName
  for (var title in posts) { 
    if (title === requestedPost) { 
      postFound = true;
      res.render('post', {post: posts[requestedPost]})
    }
  }
  if (!postFound) { 
    res.render('post', {post: "Invalid Post"}) 
  }
})

app.get('/contact', (req, res) =>{
  res.render('contact')
})
app.get('/about', (req, res) =>{
  res.render('about')
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
