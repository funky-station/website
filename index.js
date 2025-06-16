const funkyStationUrl = "https://status.funkystation.org/lrp/status"
const funkyStationMrpUrl = "https://status.funkystation.org/mrp/status"

async function updateServerStatus(id, source) {
  const serverCard = document.getElementById(id);
  const serverStatus = serverCard.querySelector('.server-status');

  try {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    serverCard.querySelector('.server-name').innerText = json.name;
    serverStatus.querySelector('.server-players').innerText = json.players;
    serverStatus.querySelector('.server-maxplayers').innerText = json.soft_max_players;
    serverStatus.querySelector('.server-preset').innerText = json.preset;
    serverStatus.querySelector('.server-map').innerText = json.map ?? "Lobby";

  } catch (error) {
    serverStatus.innerHTML = "Unable to contact server.";
    console.error(error.message);
  }
}

await updateServerStatus('server-cirno', 'http://play.funkystation.org:1212/status');
await updateServerStatus('server-scarlet', 'http://play.funkystation.org:1213/status');
await updateServerStatus('server-marisa', 'http://play.funkystation.org:1214/status');
