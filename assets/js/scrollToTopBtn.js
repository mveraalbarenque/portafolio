const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const changeBtnDisplay = () => {
  const button = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 200) button.style.display = "block";
  else button.style.display = "none";
};

window.addEventListener("scroll", changeBtnDisplay);
