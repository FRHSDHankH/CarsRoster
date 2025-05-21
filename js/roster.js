document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("addItems");
  const render = (players) => {
    carousel.innerHTML = "";
    players.forEach((p, index) => {
      const item = document.createElement("div");
      item.className = "carousel-item text-center" + (index === 0 ? " active" : "");
      item.innerHTML = `
        <div class="card mx-auto bg-transparent text-white font border-0 fadeIn" style="width: 50vw;">
          <img src="${p.photo}" class="card-img-top img-fluid mx-auto w-50">
          <div class="card-body">
            <p class="card-title display-4">${p.make} ${p.model}</p>
            <button onclick="" class="btn btn-transparent text-white border border-1 border-white text-center display-6 scale">More Info</button>
          </div>
        </div>
  `;
      carousel.appendChild(item);
    });
  };

  render(players);
});
