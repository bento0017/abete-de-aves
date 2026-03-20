/* -------------------------------------------------
   main.js – funcionalidades básicas
   ------------------------------------------------- */

/* 1️⃣  Menu mobile */
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".main-nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

/* 2️⃣ Lightbox simples (abre a imagem em nova aba) */
document.querySelectorAll(".lightbox").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const imgUrl = link.getAttribute("href");
    window.open(imgUrl, "_blank");
  });
});

/* 3️⃣ Google Maps (embed) – substitua lat/lng */
function initMap() {
  const lat = 40.6639; // <‑‑ coordenadas do endereço
  const lng = -7.9384;
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 15,
  });
  new google.maps.Marker({ position: { lat, lng }, map });
}

/* Carrega o script do Google Maps apenas na página de contacto */
if (document.getElementById("map")) {
  const script = document.createElement("script");
  const apiKey = "SUA_API_KEY_AQUI"; // <‑‑ obter em https://console.cloud.google.com
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}
