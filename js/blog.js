import {bloglist} from "/js/bloglist.js"
const recentPost = document.getElementById("recent-posts")

const currentPath = window.location.pathname
const cleanSlug = currentPath.split('?')[0].split('#')[0]
const currentSlug = cleanSlug.endsWith('/') ? cleanSlug : `${cleanSlug}/`

const currentBlogIndex = bloglist.findIndex(blog => blog.url === currentSlug)

recentPost.innerHTML = bloglist.slice(currentBlogIndex - 1, currentBlogIndex + 2).map(blogs =>{
return `<div class="recent-post-carousel">
<a href="${blogs.url}">
<img src="${blogs.img}">
<time>${blogs.date}</time>
<h4>${blogs.title}</h4>
<p>${blogs.desc}</p>
</a>
</div>`
}).join("")