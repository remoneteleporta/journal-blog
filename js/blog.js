import {bloglist} from "/js/bloglist.js"
const recentPost = document.getElementById("recent-posts")

const currentPath = window.location.pathname
const cleanSlug = currentPath.split('?')[0].split('#')[0]
const currentSlug = cleanSlug.endsWith('/') ? cleanSlug : `${cleanSlug}/`

const currentBlogIndex = bloglist.findIndex(blog => blog.url === currentSlug)

let start, end;
const totalBlogs = bloglist.length;
const lastIndex = totalBlogs - 1;

if (currentBlogIndex === 0) {
  start = 0;
  end = Math.min(3, totalBlogs);

} else if (currentBlogIndex === lastIndex) {
  start = Math.max(totalBlogs - 3, 0);
  end = totalBlogs;

} else {
  start = currentBlogIndex - 1;
  end = currentBlogIndex + 2;
}

recentPost.innerHTML = bloglist
  .slice(start, end)
  .map(blogs => `
    <div class="recent-post-carousel">
      <a href="${blogs.url}">
        <img src="${blogs.img}">
        <time>${blogs.date}</time>
        <h4>${blogs.title}</h4>
        <p>${blogs.desc}</p>
      </a>
    </div>
  `)
  .join("");