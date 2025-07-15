function handleSend() {
  const input = document.getElementById('input');
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage('Tu', msg);
  input.value = '';
  setTimeout(() => {
    const reply = "Sono qui, dimmi tutto...";
    appendMessage('Ilanox', reply);
  }, 300);
}

function appendMessage(sender, text) {
  const diary = document.getElementById('diary');
  const p = document.createElement('p');
  p.innerHTML = <strong>${sender}:</strong> ${text};
  diary.appendChild(p);
  diary.scrollTop = diary.scrollHeight;
}
