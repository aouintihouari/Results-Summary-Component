fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.querySelector(".summary-list");
    ul.innerHTML = "";
    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("summary-item", item.category.toLowerCase());
      li.innerHTML = `
        <span class="summary-icon-title">
          <img src="${item.icon}" alt="${item.category}" /> ${item.category}</span>
        <span><strong>${item.score}</strong>/100</span>
      `;
      ul.appendChild(li);
    });
  })
  .catch((error) => console.error("Error fetching the JSON:", error));
