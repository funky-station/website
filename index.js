const funkyStationUrl = "http://play.funkystation.org:1213/status"

async function getData() {
    try {
      const response = await fetch(funkyStationUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
}
  

var res = await getData()

document.getElementById('playersOnFunky').innerText = res.players
document.getElementById('funkystationName').innerText = res.name
document.getElementById('gamePreset').innerText = res.preset
document.getElementById('gameMap').innerText = res.map
