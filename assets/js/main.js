// Edit only CONFIG. Reuse it later for cart / WhatsApp ordering.
const CONFIG = {
  whatsapp: "03312654193",       // country code + number, no + or spaces
  instagram: "starhubcustomize",   // Instagram username
  message: "Hello Star Hub Customize! I'd like to know more about your personalized gifts."
};

const waLink = (text = CONFIG.message) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

document.querySelectorAll("[data-wa]").forEach(a => (a.href = waLink()));
document.querySelectorAll("[data-ig]").forEach(a => (a.href = `https://instagram.com/${CONFIG.instagram}`));
// Remove this line once product pages exist
document.querySelectorAll(".card").forEach(c => c.addEventListener("click", e => e.preventDefault()));
