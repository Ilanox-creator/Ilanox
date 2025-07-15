async function caricaDati() {
  try {
    const response = await fetch('data.json');
    const dati = await response.json();

    return dati;
  } catch (error) {
    console.error('Errore nel caricamento di data.json:', error);
  }
}

function scegliMessaggio(emozioni, emozioneRichiesta) {
  const emozione = emozioni.find(e => e.nome === emozioneRichiesta);
  if (!emozione || !emozione.messaggi || emozione.messaggi.length === 0) {
    return "Non so ancora come rispondere a questa emozione... ma sono qui.";
  }

  const messaggi = emozione.messaggi;
  const indiceCasuale = Math.floor(Math.random() * messaggi.length);
  return messaggi[indiceCasuale];
}

// Funzione per mostrare la risposta di Ilanox
async function rispondi(emozioneRichiesta) {
  const dati = await caricaDati();
  const messaggio = scegliMessaggio(dati.emozioni, emozioneRichiesta);
  const areaRisposta = document.getElementById('risposta');
  areaRisposta.textContent = messaggio;
}
