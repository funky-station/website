const funkyStationUrl = "https://status.funkystation.org/lrp/status"
const funkyStationMrpUrl = "https://status.funkystation.org/mrp/status"

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
 
async function getMrpData() {
  try {
    const response = await fetch(funkyStationMrpUrl);
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
var mrpRes = await getMrpData()

document.getElementById('playersOnFunky').innerText = res.players
document.getElementById('funkystationName').innerText = res.name
document.getElementById('gamePreset').innerText = res.preset
document.getElementById('gameMap').innerText = res.map ? res.map : 'Lobby'

document.getElementById('playersOnFunkyMrp').innerText = mrpRes.players
document.getElementById('funkystationmrpname').innerText = mrpRes.name
document.getElementById('gamePresetMrp').innerText = mrpRes.preset
document.getElementById('gameMapMrp').innerText = mrpRes.map ? mrpRes.map : 'Lobby'
