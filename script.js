const form = document.querySelector("#lead-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Olá! Quero avaliar meu carro com a Flash Car Store Campinas.",
    `Veículo: ${data.get("modelo")}`,
    `Ano: ${data.get("ano")}`,
    `Nome: ${data.get("nome")}`,
    `WhatsApp: ${data.get("telefone")}`,
  ].join("\n");
  window.open(`https://wa.me/5519998608080?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
