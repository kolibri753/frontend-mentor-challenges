const sortButton = document.getElementById("sort-button");
let ascending = true;

sortButton.addEventListener("click", function () {
  const projectsContainer = document.querySelector(".projects");
  const projects = Array.from(document.querySelectorAll(".project"));

  projects.sort((a, b) => {
    return ascending
      ? new Date(a.dataset.date) - new Date(b.dataset.date)
      : new Date(b.dataset.date) - new Date(a.dataset.date);
  });

  projects.forEach((project) => projectsContainer.appendChild(project));

  ascending = !ascending;
  sortButton.textContent = ascending ? "Sort by Oldest" : "Sort by Newest";
});
