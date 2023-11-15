const container = document.querySelector(".container");
const card = document.querySelector(".card");
const submitBtn = document.querySelector("#submitBtn");
let flagImg = document.querySelector("#flagImg");
let placeName = document.querySelector("#placeName");
let capital = document.querySelector("#capital");
let region = document.querySelector("#region");
let population = document.querySelector("#population");
let timeZone = document.querySelector("#timeZone");

const darkToggle = document.querySelector("#darkToggle");
const inputLabel = document.querySelector("#inputLabel");
darkToggle.addEventListener("click", () => {
    let theme = darkToggle.innerHTML;
    if(theme === "Light") {
        darkToggle.innerHTML = "Dark";
        container.style.background = "black";
        inputLabel.style.color = "white";
    }
    else {
        darkToggle.innerHTML = "Light";
        container.style.background = "white";
        inputLabel.style.color = "black";
    }
})


submitBtn.addEventListener("click", () => {
  
    
    const place = document.querySelector("#place").value;
    if (place == "Nothing selected") {
        alert("Please select a Place");
        card.style.display = "none";
        return;
    }

    const req = new XMLHttpRequest();

    req.open("GET", `https://restcountries.com/v3.1/name/${place}`);
    req.send();
    
    req.onload = () => {
        const [data] = JSON.parse(req.responseText);

        flagImg.setAttribute("src", `${data.flags.svg}`);
        placeName.innerHTML = data.name.common;
        capital.innerHTML = `Capital: <b>${data.capital}</b>`;
        region.innerHTML = data.region;
        population.innerHTML = data.population;
        timeZone.innerHTML = data.timezones;

    };
    card.style.display = "grid";
});


// req.addEventListener("load", function() {
    // const [data] = JSON.parse(this.responseText);

    // const htmlData = `
    //     <div class="card">
    //         <img src="${data.flags.svg}" alt="">
    //         <div id="basicInfo">
    //             <h3 id="name">${data.name.common}</h3>
    //             <p id="capital">Capital: <b>${data.capital}</b></p>
    //         </div>
    //         <hr>
    //         <div id="extraInfo">
    //             <div id="region" class="extraInfoClass">
    //                 <h3>${data.region}</h3>
    //                 <p>Region</p>
    //             </div>

    //             <div id="population" class="extraInfoClass">
    //                 <h3>${data.population}</h3>
    //                 <p>Population</p>
    //             </div>

    //             <div id="timeZone" class="extraInfoClass">
    //                 <h3>${data.timezones}</h3>
    //                 <p>Time Zone</p>
    //             </div>
    //         </div>
    //     </div> 
    // `;

    // container.insertAdjacentHTML("afterbegin", htmlData);
// });