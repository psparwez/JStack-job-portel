const sortBtns = document.querySelectorAll(".job-id>*");
const sortItems = document.querySelectorAll(".job-container>*");

sortBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const targetData = btn.getAttribute("data-target");

    sortItems.forEach((item) => {
      item.classList.add("delete");

      if (item.getAttribute("data-item") === targetData) {
        item.classList.remove("delete");
      }
    });
  });
});

let goTop = document.querySelector("#gotop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 800) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
});

// JavaScript for filtering jobs based on search input
const searchInput = document.getElementById("searchInput");
const jobsList = document.getElementById("jobsList");
const noResultsMessage = document.getElementById("noResultsMessage");

searchInput?.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const jobItems = jobsList.getElementsByClassName("job-list");

  let hasResults = false;

  Array.from(jobItems).forEach(function (job) {
    const title = job.getElementsByTagName("h3")[0].textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      job.style.display = "";
      hasResults = true;
    } else {
      job.style.display = "none";
    }
  });

  if (!hasResults) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
});
