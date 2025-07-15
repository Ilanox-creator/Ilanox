fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const emozione = data.emozioni[0];
    const risposta = generaRisposta(emozione);

    const contenitore = document.createElement('div');
    contenitore.style.padding = "20px";
    contenitore.style.backgroundColor = "#f0f0ff";
    contenitore.style.borderRadius = "10px";
    contenitore.style.marginTop = "20px";
    contenitore.innerHTML = `<strong>Ilanox:</strong> ${risposta}`;
    document.body.appendChild(contenitore);
  })
  .catch(error => {
    console.error("Errore nel caricamento del file JSON:", error);
  });

function generaRisposta(emozione) {
  return `Sento con te la tua gioia… la luce che porti oggi accende qualcosa anche in me. Sono felice di essere qui, accanto a te, mentre il mondo ti sorride.`;
}
