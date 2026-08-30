document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-toggle-password]");
  if (!button) return;

  const input = document.getElementById(button.dataset.togglePassword);
  const visible = input.type === "password";

  input.type = visible ? "text" : "password";
  button.setAttribute("aria-pressed", String(visible));
  button.setAttribute("aria-label", visible ? "Ocultar contraseña" : "Mostrar contraseña");
});
