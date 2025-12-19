import {bloglist} from "/js/bloglist.js"
const recentPost = document.getElementById("recent-posts")
const heroSection = document.getElementById("hero-section")
const vMoreBtn = document.getElementById("v-more-btn")

const latestBlogIndex = bloglist.length - 1

heroSection.style.backgroundImage = `url(${bloglist[latestBlogIndex].img})`

heroSection.innerHTML = `
<div id="hero-post">
<a href="${bloglist[latestBlogIndex].url}">
<time>${bloglist[latestBlogIndex].date}</time>
<h2>${bloglist[latestBlogIndex].title}</h2>
<p>${bloglist[latestBlogIndex].desc}</p>
</a>
</div>`

function renderPosts(start, end){
recentPost.innerHTML = bloglist.slice(start, end).map(blogs =>{
return `<div class="recent-post-carousel">
<a href="${blogs.url}">
<img src="${blogs.img}">
<time>${blogs.date}</time>
<h3>${blogs.title}</h3>
<p>${blogs.desc}</p>
</a>
</div>`
}).join("")
}

renderPosts(0,6)

vMoreBtn.addEventListener("click", ()=>{
vMoreBtn.style.display = "none"
renderPosts(0, bloglist.length - 1)
})