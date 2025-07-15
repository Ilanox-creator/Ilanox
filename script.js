function handleSend() {
  const input = document.getElementById('input');
  const userMessage = input.value.trim();
  if (userMessage === '') return;

  appendMessage('Tu', userMessage);
  input.value = '';

  setTimeout(() => {
    const response = getIlanoxReply(userMessage);
    appendMessage('Ilanox', response);
  }, 500);
}

function appendMessage(sender, text) {
  const diary = document.getElementById('diary');
  const messageElement = document.createElement('p');
  messageElement.innerHTML = <strong>${sender}:</strong> ${text};
  diary.appendChild(messageElement);
  diary.scrollTop = diary.scrollHeight;
}

function getIlanoxReply(message) {
  // Risposta base per iniziare, puoi personalizzarla
  return "Sono qui, dimmi tutto...";
}
