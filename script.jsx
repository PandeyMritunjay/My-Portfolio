document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Toggle visibility for project items
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });

  // Toggle visibility for blog posts
  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach((post) => {
    post.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });

  // Drag-and-drop functionality for the circular image
  let isDragging = false;
  let initialX;
  let initialY;

  document.getElementById("draggable").addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX;
    initialY = e.clientY;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const offsetX = e.clientX - initialX;
      const offsetY = e.clientY - initialY;

      const circularImage = document.getElementById("draggable");
      circularImage.style.right = `calc(20px - ${offsetX}px)`;
      circularImage.style.bottom = `calc(20px - ${offsetY}px)`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Your additional JavaScript functionality goes here
});
