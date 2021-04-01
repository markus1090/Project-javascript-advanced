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
            console.log(data);
            return searchGeo.showGeo(data);          
          } catch (err) {
              console.log("error" + err); 
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
            searchGeo.generateTableIaqi(data);
        }  
    } 

    /* Method that generates iaqi table dates */
    generateTableIaqi(data) {
      let table = document.createElement("table");    
      table.setAttribute("id", "tableGeo2");
      let tableBody = document.createElement("tbody");
      tableBody.setAttribute("id", "tableBodyGeo2");
      table.appendChild(tableBody);
      show.appendChild(table);
      
      let array = ["Carbon Monoxyde", "Relative Humidity", "Nitrogen Dioxide", "Ozone", "Atmostpheric Pressure", "PM10", "PM25", "Sulphur Dioxide", "Temperature", "Wind"];
      let arrayDate = [(_.get(data,['data', 'iaqi', 'co', 'v'])), (_.get(data,['data', 'iaqi', 'h', 'v'])), (_.get(data,['data', 'iaqi', 'no2', 'v'])),
      (_.get(data,['data', 'iaqi', 'o3', 'v'])), (_.get(data,['data', 'iaqi', 'p', 'v'])), (_.get(data,['data', 'iaqi', 'pm10', 'v'])),
      (_.get(data,['data', 'iaqi', 'pm25', 'v'])), (_.get(data,['data', 'iaqi', 'so2', 'v'])), (_.get(data,['data', 'iaqi', 't', 'v'])),
      (_.get(data,['data', 'iaqi', 'w', 'v']))];
      
      for (let m = 0; m < array.length; m++) {
        let row = document.createElement("tr");

        let cell = document.createElement("th");
        let cellText = document.createTextNode(array[m]);
        cell.appendChild(cellText);
        row.appendChild(cell);

        let cell2 = document.createElement("td");
        if (m == 0 || m == 2 || m == 3 || m == 5 || m == 6 || m == 7) {searchGeo.checkColor(arrayDate[m], cell2);}
        let cellText2 = document.createTextNode(arrayDate[m]);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);

        document.getElementById("tableBodyGeo2").appendChild(row);
      }     
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9nZXR0by1KYXZhc2NyaXB0LUFkdmFuY2VkLy4vc3JjL2dlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QjtBQUNBO0FBQ0EsK0VBQStFLGdDQUFnQywwQ0FBdUI7QUFDdEk7QUFDQTtBQUNBO0FBQ0EsMkM7QUFDQSxXQUFXO0FBQ1gseUM7QUFDQSxXO0FBQ0E7QUFDQSxZO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGtCQUFrQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwyQztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUztBQUNBLEs7O0FBRUE7QUFDQTtBQUNBLGtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixrQkFBa0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQixPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVMsS0FBSyxZQUFZO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsbUNBQW1DO0FBQ3RDLEdBQUcsb0NBQW9DO0FBQ3ZDLEdBQUcscUNBQXFDO0FBQ3hDLEdBQUcscUNBQXFDO0FBQ3hDLEdBQUcscUNBQXFDO0FBQ3hDLEdBQUcscUNBQXFDO0FBQ3hDLEdBQUcscUNBQXFDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxzRiIsImZpbGUiOiJnZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGNsYXNzIEdlbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIC8qIENyZWF0aW9uIGNvbXBvbmVudCBHZW8gKi9cclxuICAgIGNvbXBvbmVudEdlbygpIHtcclxuICAgICAgICBsZXQgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBlbGVtZW50Mi5jbGFzc0xpc3QuYWRkKCdkaXZHZW8nKTtcclxuICAgICAgICBlbGVtZW50Mi5pbm5lckhUTUwgPSBcIkdldCBzdGF0aW9uIGNsb3NlcjpcIlxyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gXCJQb3NpdGlvblwiO1xyXG4gICAgICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFN1Y2Nlc3MgZnVuY3Rpb24gZ2V0Q3VycmVudFBvc2l0aW9uICovXHJcbiAgICBzdWNjZXNzKHBvcykge1xyXG4gICAgICAgIGxldCBjcmQgPSBwb3MuY29vcmRzO1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdlbygpIHsgXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXBpX3VybCA9IChcImh0dHBzOi8vYXBpLndhcWkuaW5mby9mZWVkL2dlbzpcIiArIGNyZC5sYXRpdHVkZSArXCI7XCIrIGNyZC5sb25naXR1ZGUgKyBcIi8/dG9rZW49XCIgKyBwcm9jZXNzLmVudi5TRUNSRVRfTkFNRSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaV91cmwpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hHZW8uc2hvd0dlbyhkYXRhKTsgICAgICAgICAgXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIgKyBlcnIpOyBcclxuICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgZ2VvKCk7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ldGhvZCB0aGF0IHNob3dzIGRhdGVzICovXHJcbiAgICBzaG93R2VvKGRhdGEpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zaXRpb25cIikub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgc2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgc2hvdy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpOyAgICBcclxuICAgICAgICAgICAgdGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJsZUdlb1wiKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICAgICAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFibGVCb2R5R2VvXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xyXG4gICAgICAgICAgICBzaG93LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYXJyYXkgPSBbXCJBcXVpXCIsIFwiRGF0ZVwiLCBcIlRpbWVcIiwgXCJOYW1lIFN0YXRpb25cIiwgXCJMb25naXR1ZGVcIiwgXCJMYXRpdHVkZVwiXTtcclxuICAgICAgICAgICAgbGV0IGFycmF5RGF0ZSA9IFsoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnYXFpJ10pKSwgKF8uZ2V0KGRhdGEsWydkYXRhJywgJ3RpbWUnLCAncyddKSksXHJcbiAgICAgICAgICAgIChfLmdldChkYXRhLFsnZGF0YScsICd0aW1lJywgJ3R6J10pKSwgKF8uZ2V0KGRhdGEsWydkYXRhJywgJ2NpdHknLCAnbmFtZSddKSksIFxyXG4gICAgICAgICAgICAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnY2l0eScsICdnZW8nLCAwXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnY2l0eScsICdnZW8nLCAxXSkpXTtcclxuICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IGFycmF5Lmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJyYXlbcF0pO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHAgPT0gMCkge3NlYXJjaEdlby5jaGVja0NvbG9yKGFycmF5RGF0ZVswXSwgY2VsbDIpO30gXHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbFRleHQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJyYXlEYXRlW3BdKTtcclxuICAgICAgICAgICAgICAgIGNlbGwyLmFwcGVuZENoaWxkKGNlbGxUZXh0Mik7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVCb2R5R2VvXCIpLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VhcmNoR2VvLmdlbmVyYXRlVGFibGVJYXFpKGRhdGEpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSBcclxuXHJcbiAgICAvKiBNZXRob2QgdGhhdCBnZW5lcmF0ZXMgaWFxaSB0YWJsZSBkYXRlcyAqL1xyXG4gICAgZ2VuZXJhdGVUYWJsZUlhcWkoZGF0YSkge1xyXG4gICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7ICAgIFxyXG4gICAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhYmxlR2VvMlwiKTtcclxuICAgICAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFibGVCb2R5R2VvMlwiKTtcclxuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVCb2R5KTtcclxuICAgICAgc2hvdy5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgYXJyYXkgPSBbXCJDYXJib24gTW9ub3h5ZGVcIiwgXCJSZWxhdGl2ZSBIdW1pZGl0eVwiLCBcIk5pdHJvZ2VuIERpb3hpZGVcIiwgXCJPem9uZVwiLCBcIkF0bW9zdHBoZXJpYyBQcmVzc3VyZVwiLCBcIlBNMTBcIiwgXCJQTTI1XCIsIFwiU3VscGh1ciBEaW94aWRlXCIsIFwiVGVtcGVyYXR1cmVcIiwgXCJXaW5kXCJdO1xyXG4gICAgICBsZXQgYXJyYXlEYXRlID0gWyhfLmdldChkYXRhLFsnZGF0YScsICdpYXFpJywgJ2NvJywgJ3YnXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdoJywgJ3YnXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdubzInLCAndiddKSksXHJcbiAgICAgIChfLmdldChkYXRhLFsnZGF0YScsICdpYXFpJywgJ28zJywgJ3YnXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdwJywgJ3YnXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdwbTEwJywgJ3YnXSkpLFxyXG4gICAgICAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdwbTI1JywgJ3YnXSkpLCAoXy5nZXQoZGF0YSxbJ2RhdGEnLCAnaWFxaScsICdzbzInLCAndiddKSksIChfLmdldChkYXRhLFsnZGF0YScsICdpYXFpJywgJ3QnLCAndiddKSksXHJcbiAgICAgIChfLmdldChkYXRhLFsnZGF0YScsICdpYXFpJywgJ3cnLCAndiddKSldO1xyXG4gICAgICBcclxuICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBhcnJheS5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIGxldCBjZWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5W21dKTtcclxuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxUZXh0KTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcblxyXG4gICAgICAgIGxldCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBpZiAobSA9PSAwIHx8IG0gPT0gMiB8fCBtID09IDMgfHwgbSA9PSA1IHx8IG0gPT0gNiB8fCBtID09IDcpIHtzZWFyY2hHZW8uY2hlY2tDb2xvcihhcnJheURhdGVbbV0sIGNlbGwyKTt9XHJcbiAgICAgICAgbGV0IGNlbGxUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5RGF0ZVttXSk7XHJcbiAgICAgICAgY2VsbDIuYXBwZW5kQ2hpbGQoY2VsbFRleHQyKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbDIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlQm9keUdlbzJcIikuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgfSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyogTWV0aG9kIHRoYXQgY2hlY2tzIGNvbG9yIG9mIEFRSSAqL1xyXG4gICAgY2hlY2tDb2xvcihjaGVja0NvbG9yLCBjZWxsMikge1xyXG4gICAgICBpZiAoY2hlY2tDb2xvciA9PSBcIi1cIikgcmV0dXJuICBcclxuICAgICAgbGV0IG51bSA9IE51bWJlcihjaGVja0NvbG9yKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzcGVjdHJ1bS5sZW5ndGg7IGorKykgeyAgXHJcbiAgICAgICAgICBpZiAobnVtIDw9IHNwZWN0cnVtW2pdLmEpIHtcclxuICAgICAgICAgICAgICBjZWxsMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzcGVjdHJ1bVtqXS5iO1xyXG4gICAgICAgICAgICAgIGNlbGwyLnN0eWxlLmNvbG9yID0gc3BlY3RydW1bal0uZjtcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSAgIFxyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgLyogRXJyb3IgZnVuY3Rpb24gZ2V0Q3VycmVudFBvc2l0aW9uICovXHJcbiAgICBlcnJvcihlcnIpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBFUlJPUigke2Vyci5jb2RlfSk6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBvcHRpb25zID0ge1xyXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcclxuICB0aW1lb3V0OiA1MDAwLFxyXG4gIG1heGltdW1BZ2U6IDBcclxufVxyXG5cclxubGV0IHNwZWN0cnVtID0gW1xyXG4gIHsgYTogMCwgYjogXCIjY2NjY2NjXCIsIGY6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgeyBhOiA1MCwgYjogXCIjMDA5OTY2XCIsIGY6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgeyBhOiAxMDAsIGI6IFwiI2ZmZGUzM1wiLCBmOiBcIiMwMDAwMDBcIiB9LFxyXG4gIHsgYTogMTUwLCBiOiBcIiNmZjk5MzNcIiwgZjogXCIjMDAwMDAwXCIgfSxcclxuICB7IGE6IDIwMCwgYjogXCIjY2MwMDMzXCIsIGY6IFwiI2ZmZmZmZlwiIH0sXHJcbiAgeyBhOiAzMDAsIGI6IFwiIzY2MDA5OVwiLCBmOiBcIiNmZmZmZmZcIiB9LFxyXG4gIHsgYTogNTAwLCBiOiBcIiM3ZTAwMjNcIiwgZjogXCIjZmZmZmZmXCIgfSxcclxuXTtcclxuXHJcbmxldCBzZWFyY2hHZW8gPSBuZXcgR2VvKFwic3RydWN0dXJlR2VvXCIpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoc2VhcmNoR2VvLmNvbXBvbmVudEdlbygpKTtcclxubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzZWFyY2hHZW8uc3VjY2Vzcywgc2VhcmNoR2VvLmVycm9yLCBvcHRpb25zKTsiXSwic291cmNlUm9vdCI6IiJ9