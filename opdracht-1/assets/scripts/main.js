const uitvoer = document.getElementById("uitvoer");
let dataObject;

const weekNaam = (num) => {
  switch (num) {
    case 0:
      return "zondag";
      break;
    case 1:
      return "maandag";
      break;
    case 2:
      return "dinsdag";
      break;
    case 3:
      return "woensdag";
      break;
    case 4:
      return "donderdag";
      break;
    case 5:
      return "vrijdag";
      break;
    case 6:
      return "zaterdag";
      break;
    default:
      return num;
  }
};

const maandNaam = (num) => {
  switch (num) {
    case 0:
      return "januari";
      break;
    case 1:
      return "februari";
      break;
    case 2:
      return "maart";
      break;
    case 3:
      return "april";
      break;
    case 4:
      return "mei";
      break;
    case 5:
      return "juni";
      break;
    case 6:
      return "july";
      break;
    case 7:
      return "augustus";
      break;
    case 8:
      return "september";
      break;
    case 9:
      return "oktober";
      break;
    case 10:
      return "november";
      break;
    case 11:
      return "december ";
      break;
    default:
      return num;
  }
};

const maakDatum = (num) => {
  let datum = new Date(num);

  let dagWeek = datum.getDay();
  let dagMaand = datum.getDate();
  let maand = datum.getMonth();
  let jaar = datum.getFullYear();
  let uren = datum.getHours();
  if (uren < 10) {
    uren = "0" + uren;
  }

  let minuten = datum.getMinutes();
  if (minuten < 10) {
    minuten = "0" + minuten;
  }

  return `${weekNaam(dagWeek)} <br> 
    ${dagMaand} ${maandNaam(maand)} ${jaar} ${uren}:${minuten}`;
};

const uitvoeren = () => {
  let html = "";
  dataObject.forEach((obj) => {
    html += `<div class="rij">`;
    html += `<div>${maakDatum(obj.tijd)}</div>`;
    html += `<div>${obj.tempBuiten} &deg;C</div>`;
    html += `<div>${obj.tempBinnen} &deg;C</div>`;
    html += `<div>${obj.tempGewenst} &deg;C</div>`;
    if (obj.tempGewenst > obj.tempBinnen) {
      html += `<div> <img class="icons" src="icons/vlam.svg" alt="CV Aan"> </div>`;
    } else {
      html += `<div> <img class="icons" src="icons/vlamUIt.svg" alt="CV Uit"> </div>`;
    }

    obj.lichtKamer
      ? (html += `<div> <img class="icons" src="icons/lampAan.svg" alt="Lamp Aan"> </div>`)
      : (html += `<div> <img class="icons" src="icons/lampUIt.svg" alt="Lamp Uit"> </div>`);
    obj.lichtBuiten
      ? (html += `<div> <img class="icons" src="icons/lampAan.svg" alt="Lamp Aan"> </div>`)
      : (html += `<div> <img class="icons" src="icons/lampUIt.svg" alt="Lamp Uit"> </div>`);
    html += "</div>";
  });

  uitvoer.innerHTML = html;
};

const starten = () => {
  dataObject = energieData;
  uitvoeren();
};

document.addEventListener("DOMContentLoaded", () => {
  starten();
});
