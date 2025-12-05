import { bloglist } from "/js/bloglist.js"
const recentPost = document.getElementById("recent-posts")


recentPost.innerHTML = bloglist.slice(bloglist.length - 3).reverse().map(blogs =>{
return `<div class="recent-post-carousel">
<a href="${blogs.url}">
<img src="${blogs.img}">
<time>${blogs.date}</time>
<h4>${blogs.title}</h4>
<p>${blogs.desc}</p>
</a>
</div>`
}).join("")