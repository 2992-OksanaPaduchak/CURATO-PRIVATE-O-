const switchers = document.querySelectorAll(".lang-switcher");

switchers.forEach((switcher) => {
  const btn = switcher.querySelector("button");
  const list = switcher.querySelector(".lang_list");
  const text = switcher.querySelector(".lang_text");
  const img = btn.querySelector("img");

  btn.addEventListener("click", () => {
    list.style.display = list.style.display === "block" ? "none" : "block";
  });

  list.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      img.src = li.querySelector("img").src;
      text.textContent = li.textContent.trim();
      list.style.display = "none";
    });
  });
});
