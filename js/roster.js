function show(make) {
  const car = document.getElementById(make);
  car.classList.add("d-block");
  car.classList.remove("d-none");
  document.getElementById("unHideFr").classList.remove("d-none");
  document.getElementById("hideFr").classList.add("d-none");
}

function close(make) {
  console.log("i work");
  const car = document.getElementById(make);
  car.classList.remove("d-block");
  car.classList.add("d-none");
  document.getElementById("unHideFr").classList.add("d-none");
  document.getElementById("hideFr").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("addItems");
  const modals = document.getElementById("modals");
  const render = (players) => {
    carousel.innerHTML = "";
    modals.innerHTML = "";
    players.forEach((p, index) => {
      const item = document.createElement("div");
      item.className =
        "carousel-item text-center" + (index === 0 ? " active" : "");
      item.innerHTML = `
        <div class="card mx-auto bg-transparent text-white font border-0 fadeIn" style="width: 50vw;">
          <img src="${p.photo}" class="card-img-top img-fluid mx-auto w-50">
          <div class="card-body">
            <p class="card-title display-4">${p.make} ${p.model}</p>
            <button onclick="show('${p.idName}')" class="btn btn-transparent text-white border border-1 border-white text-center display-6 scale">More Info</button>
          </div>
        </div>`;
      carousel.appendChild(item);
    });

    players.forEach((p) => {
      const modal = document.createElement("div");
      modal.className =
        "rounded w-75 font display-4 text-white text-center mx-auto border border-1 border-white bg-transparent d-none fadeIn p-5";
      modal.id = p.idName;
      modal.innerHTML = `
    ${p.make} ${p.model} Fun Fact:<br>
    <span class="fs-4">${p.funFact}</span><br>
    <button class='fs-2 text-white bg-transparent border border-1 border-white scale rounded text-center p-3'>Close</button>
  `;

      // Attach event listener to the button
      const button = modal.querySelector("button");
      button.addEventListener("click", () => close(p.idName));

      modals.appendChild(modal);
    });
  };

  render(players);
});
