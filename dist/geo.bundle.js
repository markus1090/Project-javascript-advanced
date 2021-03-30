/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/geo.js ***!
  \********************/
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
            let api_url = ("https://api.waqi.info/feed/geo:" + crd.latitude +";"+ crd.longitude + "/?token=" + "20482dc6f3de69576db86cc011ac7d405a7d5c4b");
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9nZXR0by1KYXZhc2NyaXB0LUFkdmFuY2VkLy4vc3JjL2dlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QjtBQUNBO0FBQ0EsK0VBQStFLGdDQUFnQywwQ0FBdUI7QUFDdEk7QUFDQTtBQUNBLDJDO0FBQ0EsV0FBVztBQUNYLHNDO0FBQ0EsVztBQUNBO0FBQ0EsWTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixrQkFBa0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsMkM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0Esa0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUIsTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLEtBQUssWUFBWTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLG1DQUFtQztBQUN0QyxHQUFHLG9DQUFvQztBQUN2QyxHQUFHLHFDQUFxQztBQUN4QyxHQUFHLHFDQUFxQztBQUN4QyxHQUFHLHFDQUFxQztBQUN4QyxHQUFHLHFDQUFxQztBQUN4QyxHQUFHLHFDQUFxQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0Esc0YiLCJmaWxlIjoiZ2VvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBjbGFzcyBHZW8ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICAvKiBDcmVhdGlvbiBjb21wb25lbnQgR2VvICovXHJcbiAgICBjb21wb25lbnRHZW8oKSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgZWxlbWVudDIuY2xhc3NMaXN0LmFkZCgnZGl2R2VvJyk7XHJcbiAgICAgICAgZWxlbWVudDIuaW5uZXJIVE1MID0gXCJHZXQgc3RhdGlvbiBjbG9zZXI6XCJcclxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJVVFRPTlwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdpZCcsICdwb3NpdGlvbicpO1xyXG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiUG9zaXRpb25cIjtcclxuICAgICAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50MjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTdWNjZXNzIGZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbiAqL1xyXG4gICAgc3VjY2Vzcyhwb3MpIHtcclxuICAgICAgICBsZXQgY3JkID0gcG9zLmNvb3JkcztcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZW8oKSB7IFxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFwaV91cmwgPSAoXCJodHRwczovL2FwaS53YXFpLmluZm8vZmVlZC9nZW86XCIgKyBjcmQubGF0aXR1ZGUgK1wiO1wiKyBjcmQubG9uZ2l0dWRlICsgXCIvP3Rva2VuPVwiICsgcHJvY2Vzcy5lbnYuU0VDUkVUX05BTUUpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlfdXJsKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hHZW8uc2hvd0dlbyhkYXRhKTsgICAgICAgICAgXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yZWVlXCIpOyBcclxuICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgZ2VvKCk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ldGhvZCB0aGF0IHNob3dzIGRhdGVzICovXHJcbiAgICBzaG93R2VvKGRhdGEpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zaXRpb25cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgc2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAgICBcclxuICAgICAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJsZUdlb1wiKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICAgICAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFibGVCb2R5R2VvXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xyXG4gICAgICAgICAgICBzaG93LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtcIkFxdWlcIiwgXCJEYXRlXCIsIFwiVGltZVwiLCBcIk5hbWUgU3RhdGlvblwiLCBcIkxvbmdpdHVkZVwiLCBcIkxhdGl0dWRlXCJdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlEYXRlID0gWyhfLmdldChkYXRhLFsnZGF0YScsICdhcWknXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAndGltZScsICdzJ10pKSxcclxuICAgICAgICAgICAgKF8uZ2V0KGRhdGEsWydkYXRhJywgJ3RpbWUnLCAndHonXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnY2l0eScsICduYW1lJ10pKSwgXHJcbiAgICAgICAgICAgIChfLmdldChkYXRhLFsnZGF0YScsICdjaXR5JywgJ2dlbycsIDBdKSksIChfLmdldChkYXRhLFsnZGF0YScsICdjaXR5JywgJ2dlbycsIDFdKSldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBhcnJheS5sZW5ndGg7IHArKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5W3BdKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChwID09IDApIHtzZWFyY2hHZW8uY2hlY2tDb2xvcihhcnJheURhdGVbMF0sIGNlbGwyKTt9IFxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5RGF0ZVtwXSk7XHJcbiAgICAgICAgICAgICAgICBjZWxsMi5hcHBlbmRDaGlsZChjZWxsVGV4dDIpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlQm9keUdlb1wiKS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICB9IFxyXG5cclxuICAgIC8qIE1ldGhvZCB0aGF0IGdlbmVyYXRlcyB0YWJsZSBkYXRlcyAqL1xyXG4gICAgZ2VuZXJhdGVIZWFkZXJUYWJsZSgpIHtcclxuICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAgICBcclxuICAgICAgdGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJsZUdlb1wiKTtcclxuICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFibGVCb2R5R2VvXCIpO1xyXG4gICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBcclxuICAgICAgbGV0IGFycmF5ID0gW1wiQXF1aVwiLCBcIkRhdGVcIiwgXCJUaW1lXCIsIFwiTmFtZSBTdGF0aW9uXCIsIFwiTG9uZ2l0dWRlXCIsIFwiTGF0aXR1ZGVcIl07XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYXJyYXkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgbGV0IGNlbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJyYXlba10pO1xyXG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsVGV4dCk7XHJcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVCb2R5KTtcclxuICAgICAgICBcclxuICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ldGhvZCB0aGF0IGNoZWNrcyBjb2xvciBvZiBBUUkgKi9cclxuICAgIGNoZWNrQ29sb3IoY2hlY2tDb2xvciwgY2VsbDIpIHtcclxuICAgICAgaWYgKGNoZWNrQ29sb3IgPT0gXCItXCIpIHJldHVybiAgXHJcbiAgICAgIGxldCBudW0gPSBOdW1iZXIoY2hlY2tDb2xvcik7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3BlY3RydW0ubGVuZ3RoOyBqKyspIHsgIFxyXG4gICAgICAgICAgaWYgKG51bSA8PSBzcGVjdHJ1bVtqXS5hKSB7XHJcbiAgICAgICAgICAgICAgY2VsbDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc3BlY3RydW1bal0uYjtcclxuICAgICAgICAgICAgICBjZWxsMi5zdHlsZS5jb2xvciA9IHNwZWN0cnVtW2pdLmY7XHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gICBcclxuICAgICAgfVxyXG4gIH1cclxuICAgIC8qIEVycm9yIGZ1bmN0aW9uIGdldEN1cnJlbnRQb3NpdGlvbiAqL1xyXG4gICAgZXJyb3IoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgRVJST1IoJHtlcnIuY29kZX0pOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgb3B0aW9ucyA9IHtcclxuICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXHJcbiAgdGltZW91dDogNTAwMCxcclxuICBtYXhpbXVtQWdlOiAwXHJcbn1cclxuXHJcbmxldCBzcGVjdHJ1bSA9IFtcclxuICB7IGE6IDAsIGI6IFwiI2NjY2NjY1wiLCBmOiBcIiNmZmZmZmZcIiB9LFxyXG4gIHsgYTogNTAsIGI6IFwiIzAwOTk2NlwiLCBmOiBcIiNmZmZmZmZcIiB9LFxyXG4gIHsgYTogMTAwLCBiOiBcIiNmZmRlMzNcIiwgZjogXCIjMDAwMDAwXCIgfSxcclxuICB7IGE6IDE1MCwgYjogXCIjZmY5OTMzXCIsIGY6IFwiIzAwMDAwMFwiIH0sXHJcbiAgeyBhOiAyMDAsIGI6IFwiI2NjMDAzM1wiLCBmOiBcIiNmZmZmZmZcIiB9LFxyXG4gIHsgYTogMzAwLCBiOiBcIiM2NjAwOTlcIiwgZjogXCIjZmZmZmZmXCIgfSxcclxuICB7IGE6IDUwMCwgYjogXCIjN2UwMDIzXCIsIGY6IFwiI2ZmZmZmZlwiIH0sXHJcbl07XHJcblxyXG5sZXQgc2VhcmNoR2VvID0gbmV3IEdlbyhcInN0cnVjdHVyZUdlb1wiKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHNlYXJjaEdlby5jb21wb25lbnRHZW8oKSk7XHJcbm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2VhcmNoR2VvLnN1Y2Nlc3MsIHNlYXJjaEdlby5lcnJvciwgb3B0aW9ucyk7Il0sInNvdXJjZVJvb3QiOiIifQ==