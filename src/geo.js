 class Geo {
    constructor(name) {
        this.name = name;
    }
    /* Creation component Geo */
    componentGeo() {
        let element2 = document.createElement('DIV');
        element2.classList.add('divGeo');
        element2.innerHTML = "Get station closer:"
        let btn = document.createElement("BUTTON");
        btn.setAttribute('id', 'position');
        btn.textContent = "Position";
        element2.appendChild(btn);
        return element2;
    }

    /* Success function getCurrentPosition */
    success(pos) {
        let crd = pos.coords;
        async function geo() { 
          try {
            let api_url = ("https://api.waqi.info/feed/geo:" + crd.latitude +";"+ crd.longitude + "/?token=" + process.env.SECRET_NAME);
            let response = await fetch(api_url);
            let data = await response.json();
            return searchGeo.showGeo(data);          
          } catch (err) {
              console.log("erroreee"); 
          }           
        }
      geo();       
    }

    /* Method that shows dates */
    showGeo(data) {
          document.getElementById("position").onclick = function() {
            let show = document.getElementById("show");
            show.innerHTML = "";

            let table = document.createElement("table");    
            table.setAttribute("id", "tableGeo");
            let tableBody = document.createElement("tbody");
            tableBody.setAttribute("id", "tableBodyGeo");
            table.appendChild(tableBody);
            show.appendChild(table);

            let array = ["Aqui", "Date", "Time", "Name Station", "Longitude", "Latitude"];
            let arrayDate = [(_.get(data,['data', 'aqi'])), (_.get(data,['data', 'time', 's'])),
            (_.get(data,['data', 'time', 'tz'])), (_.get(data,['data', 'city', 'name'])), 
            (_.get(data,['data', 'city', 'geo', 0])), (_.get(data,['data', 'city', 'geo', 1]))];
            
            for (let p = 0; p < array.length; p++) {
                let row = document.createElement("tr");

                let cell = document.createElement("th");
                let cellText = document.createTextNode(array[p]);
                cell.appendChild(cellText);
                row.appendChild(cell);

                let cell2 = document.createElement("td");
                if (p == 0) {searchGeo.checkColor(arrayDate[0], cell2);} 
                let cellText2 = document.createTextNode(arrayDate[p]);
                cell2.appendChild(cellText2);
                row.appendChild(cell2);

                document.getElementById("tableBodyGeo").appendChild(row);
            }
        }  
    } 

    /* Method that generates table dates */
    generateHeaderTable() {
      let table = document.createElement("table");    
      table.setAttribute("id", "tableGeo");
      let tableBody = document.createElement("tbody");
      tableBody.setAttribute("id", "tableBodyGeo");
      let row = document.createElement("tr");
      
      let array = ["Aqui", "Date", "Time", "Name Station", "Longitude", "Latitude"];
      for (let k = 0; k < array.length; k++) {
          let cell = document.createElement("th");
          let cellText = document.createTextNode(array[k]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      tableBody.appendChild(row);
      table.appendChild(tableBody);
        
      return table;
    }

    /* Method that checks color of AQI */
    checkColor(checkColor, cell2) {
      if (checkColor == "-") return  
      let num = Number(checkColor);
      for (let j = 0; j < spectrum.length; j++) {  
          if (num <= spectrum[j].a) {
              cell2.style.backgroundColor = spectrum[j].b;
              cell2.style.color = spectrum[j].f;
              break
          }   
      }
  }
    /* Error function getCurrentPosition */
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
}

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}

let spectrum = [
  { a: 0, b: "#cccccc", f: "#ffffff" },
  { a: 50, b: "#009966", f: "#ffffff" },
  { a: 100, b: "#ffde33", f: "#000000" },
  { a: 150, b: "#ff9933", f: "#000000" },
  { a: 200, b: "#cc0033", f: "#ffffff" },
  { a: 300, b: "#660099", f: "#ffffff" },
  { a: 500, b: "#7e0023", f: "#ffffff" },
];

let searchGeo = new Geo("structureGeo");
document.getElementById("content").appendChild(searchGeo.componentGeo());
navigator.geolocation.getCurrentPosition(searchGeo.success, searchGeo.error, options);