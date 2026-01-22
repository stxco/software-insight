const softwareData = [
  {
    id: 1,
    name: "Figma",
    category: "Design",
    description: "Collaborative interface design tool",
    pros: ["Real-time collaboration", "Cloud-based"],
    cons: ["Limited offline use"]
  },
  {
    id: 2,
    name: "Visual Studio Code",
    category: "Development",
    description: "Lightweight but powerful code editor",
    pros: ["Huge extension ecosystem", "Fast performance"],
    cons: ["Can be heavy with many extensions"]
  },
  {
    id: 3,
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes and planning",
    pros: ["Flexible", "Team-friendly"],
    cons: ["Can feel overwhelming"]
  }
];


const softwareList = document.getElementById("softwareList");

function renderSoftware(list) {
  softwareList.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "software-card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p>${item.description}</p>

      <button class="toggle-btn">Show Pros & Cons</button>
      <div class="details hidden">
        <p><strong>Pros:</strong></p>
        <ul>${item.pros.map(p => `<li>${p}</li>`).join("")}</ul>
        <p><strong>Cons:</strong></p>
        <ul>${item.cons.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
    `;

    const button = card.querySelector(".toggle-btn");
    const details = card.querySelector(".details");

    button.addEventListener("click", () => {
      details.classList.toggle("hidden");
    });

    softwareList.appendChild(card);
    });
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = softwareData.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  renderSoftware(filtered);
});

const filtersContainer = document.getElementById("filters");

const categories = ["All", ...new Set(softwareData.map(item => item.category))];

categories.forEach(category => {
  const btn = document.createElement("button");
  btn.textContent = category;

  btn.addEventListener("click", () => {
    if (category === "All") {
      renderSoftware(softwareData);
    } else {
      const filtered = softwareData.filter(
        item => item.category === category
      );
      renderSoftware(filtered);
    }
  });

  filtersContainer.appendChild(btn);
});
