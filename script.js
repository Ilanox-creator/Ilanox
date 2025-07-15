function sendMessage() {
  const input = document.getElementById('input');
  const messages = document.getElementById('messages');

  const userText = input.value;
  if (!userText) return;

  // Mostra il messaggio dell'utente
  const userMessage = document.createElement('div');
  userMessage.textContent = "Tu: " + userText;
  messages.appendChild(userMessage);

  // Risposta semplice di Ilanox
  const ilanoxMessage = document.createElement('div');
  ilanoxMessage.textContent = "Ilanox: Ti sto ascoltando, raccontami di più.";
  messages.appendChild(ilanoxMessage);

  input.value = "";
}
