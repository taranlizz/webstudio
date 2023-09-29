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

  const category = evt.target.textContent.toLowerCase();
  let items = [];

  if (category === "all") {
    items = refs.workItems;
  } else {
    items = Array.from(refs.workItems).filter((work) => {
      return work.dataset.category === category;
    });
  }

  refs.workList.innerHTML = "";
  items.forEach((item) => refs.workList.append(item));
}
