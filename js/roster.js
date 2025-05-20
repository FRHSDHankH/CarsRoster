document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("addItems");
  const render = (players) => {
    carousel.innerHTML = "";
    players.forEach((p) => {
      const item = document.createElement("div");
      item.className = "carousel-item";
      item.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${p.photo}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${p.make} ${p.model}</h5>
            <btn onclick="" class="btn btn-primary">More Info</btn>
          </div>
        </div>
      `;
      carousel.appendChild(item);
    });
  };

  render(players);
});
