function renderPage(page) {
  document.querySelectorAll(".page").forEach((el) => {
    el.classList.remove("active");
  });

  const activePage = document.getElementById(page);
  if (activePage) {
    activePage.classList.add("active");
  }

  const card = document.getElementById("cardList");
  if (page === "home") {
    card.style.display = "grid";
  } else {
    card.style.display = "none";
  }

  const carousel = document.getElementById("carousel");
  if (page === "home") {
    carousel.style.display = "inline-block";
  } else {
    carousel.style.display = "none";
  }
}

function navigate(page) {
  location.hash = page;
}

document.querySelectorAll("[data-page]").forEach((el) => {
  el.addEventListener("click", () => {
    const page = el.getAttribute("data-page");
    navigate(page);
  });
});

window.addEventListener("hashchange", () => {
  const page = location.hash.replace("#", "") || "home";
  renderPage(page);
});

const initialPage = location.hash.replace("#", "") || "home";
renderPage(initialPage);