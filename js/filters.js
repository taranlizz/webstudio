const refs = {
  filterList: document.querySelector(".js-filter"),
  workList: document.querySelector(".js-list"),
  workItems: document.querySelectorAll("[data-category]"),
};

refs.filterList.addEventListener("click", handleFilterClick);

function handleFilterClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const items = Array.from(refs.workItems).filter((work) => {
    if (evt.target.textContent === "All") {
      return work;
    }
    return work.dataset.category === evt.target.textContent.toLowerCase();
  });

  refs.workList.innerHTML = "";
  items.forEach((item) => refs.workList.append(item));
}
