const options = {
  dragging: false,
  TouchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map

const map = L.map("mapid", options).setView([-23.4566431, -47.4897582], 17);

//create and add a tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker

L.marker([-23.4566431, -47.4897582], { icon }).addTo(map);

// image galery

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a image clicada

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphange-details > img");

  // atualizar o container de image

  imageContainer.src = image.src;

  // adicoinar de volta a classe .active para o botão clicado

  button.classList.add("active");
}
