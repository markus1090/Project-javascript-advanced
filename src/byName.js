const { parseInt } = require("lodash");

let secretName = process.env.SECRET_NAME;

class Search {
    constructor(name) {
        this.name = name;
    }

    /* Creation component Search */
    componentSearch () {
        let element1 = document.createElement('div');
        element1.classList.add('divSearch'); 

        let form = document.createElement("FORM");
        element1.appendChild(form); 

        form.innerHTML = "Insert the name of the city:"; 
    
        let inputName = document.createElement("INPUT");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id","search");
        
        form.appendChild(inputName);
    
        return element1;
    }

    /* Method that shows dates */
    showSearch(data) {
        document.getElementById("show").innerHTML = "";
        if (data.data.length == 0) {return document.getElementById("show").innerHTML = "There are no results.";}
        let show = document.getElementById("show");
        
        show.appendChild(this.generateHeaderTable());

        let lng = data.data.length;

        for (let x = 0; x < lng; x++) {
            let row = document.createElement("tr");
            let cell1 = document.createElement("td");
            cell1.setAttribute("id", "aqiBack");
            let cellText1 = document.createTextNode(_.get(data,['data', x , 'aqi']));
            cell1.appendChild(cellText1); 
            
            let checkColor = (_.get(data,['data', x , 'aqi']));
            this.checkColor(checkColor, cell1);  
            
            let cell2 = document.createElement("td");
            let cellText2 = document.createTextNode(_.get(data,['data', x ,'time','stime']));
            cell2.appendChild(cellText2);

            let cell3 = document.createElement("td");
            let cellText3 = document.createTextNode(_.get(data,['data', x ,'time','tz']));
            cell3.appendChild(cellText3);           

            let cell4 = document.createElement("td");
            let cellText4 = document.createTextNode(_.get(data,['data', x ,'station', 'name']));
            cell4.appendChild(cellText4); 
            
            row.appendChild(cell1); 
            row.appendChild(cell2);          
            row.appendChild(cell3);
            row.appendChild(cell4);

            document.getElementById("tableBody").appendChild(row);
        } 
    } 

    /* Method that generates table dates */
    generateHeaderTable() {
        let table = document.createElement("table");    
        table.setAttribute("id", "table");
        let tableBody = document.createElement("tbody");
        tableBody.setAttribute("id", "tableBody");
        let row = document.createElement("tr");
        
        let array = ["Aqui", "Date", "Time", "Name Station"];
        for (let y = 0; y < 4; y++) {
            let cell = document.createElement("th");
            let cellText = document.createTextNode(array[y]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
        table.appendChild(tableBody);
        
        return table;
    }

    /* Method that checks color of AQI */
    checkColor(checkColor, cell1) {
        if (checkColor == "-") return  
        let num = Number(checkColor);
        for (let j = 0; j < spectrum.length; j++) {  
            if (num <= spectrum[j].a) {
                cell1.style.backgroundColor = spectrum[j].b;
                cell1.style.color = spectrum[j].f;
                break
            }   
        }
    }

    /* Method that receives Json dates */
    eventSearch() {
        let keyword = document.getElementById("search").value;
            async function search() {
                if (keyword === "") {
                    document.getElementById("show").innerHTML = "";
                    return console.log("Insert text");                
                }
                try {
                    let api_url = ("https://api.waqi.info/search/?token=" + secretName + "&keyword=" + keyword);
                    let response = await fetch(api_url);
                    let data = await response.json();
                    return searchName.showSearch(data);
                } catch (err) {
                    console.log("error" + err); 
                }           
            }
        search();
    }
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

let searchName = new Search("structureSearch");

document.getElementById("content").appendChild(searchName.componentSearch());
document.getElementById("search").onkeyup = function() {searchName.eventSearch()};