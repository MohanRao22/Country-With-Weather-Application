var mainContainer = document.querySelector(".container");
var header = document.createElement("h1");
header.setAttribute("id", "title");
header.innerText = "Rest Countries Api with Weather Detector";
mainContainer.appendChild(header);
var row = document.createElement("div");
row.setAttribute("class", "row");
mainContainer.appendChild(row);

var id = 1;
var ids = 1;
var countryListApi = fetch("https://restcountries.com/v3.1/all")
    .then((resCountryBulk) => {
        return resCountryBulk.json();
    }).then((countryData) => {
        countryData.forEach((country) => {

            var countryname = country.name.common;
            var imageSource = country.flags.svg;
            var capital = country.capital;
            if (capital == undefined) {
                capital = countryname;
            }
            var region = country.region;
            var latlong = country.latlng;
            var latitude = latlong[0].toFixed(2);
            var long = latlong[1].toFixed(2);
            // row.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 col-12 whole-card">
            // <div class="">
            //       <div class="name" id="${id}"><h3> ${countryname}</h3></div>
            //      <div class="image"><img src="${imageSource}" alt="flag" /> </div>
            //      <div class="particular text-center">
            //          <p class="capital">Capital : <span class="answer1">${capital}</span></p>
            //          <p class="region">Region : <span class="answer1">${region}</span></p>
            //          <p class="country-code">LatLng <span class="answer1">${latitude} - ${long}</span></p>
            //      </div>
            //      <div class="weather-button text-center">
            //      <button class="btn btn-primary weather-btn" id="${id}" >Click for Weather </button>
            //      <div class="report text-center"><span></span></div>
            //      </div>
            //      </div>
            //           </div>  `;

            var wholeDiv = document.createElement("div");
            wholeDiv.setAttribute("class", "col-lg-4 col-xl-4 col-md-12 col-sm-12 col-12 whole-card");
            row.appendChild(wholeDiv);

            var cardHeader = document.createElement("div");
            var h3 = document.createElement("h3");
            cardHeader.appendChild(h3);
            cardHeader.setAttribute("class", "name text-center");
            h3.innerText = `${countryname}`;

            wholeDiv.appendChild(cardHeader);

            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "image");
            cardBody.innerHTML = `<img src="${imageSource}" alt="flag" />`;
            wholeDiv.appendChild(cardBody);

            var cardMain = document.createElement("div");
            cardMain.setAttribute("class", "particular text-center");
            cardMain.innerHTML = `  <p class="capital">Capital : <span class="answer1">${capital}</span></p>
                   <p class="region">Region : <span class="answer1">${region}</span></p>
                     <p class="country-code">LatLng <span class="answer1">${latitude} - ${long}</span></p> `;
            wholeDiv.appendChild(cardMain);

            // var report = document.createElement("div");
            // report.setAttribute("class", "report text-center");
            // wholeDiv.appendChild(report);

            var weatherBtn = document.createElement("div");
            weatherBtn.setAttribute("class", "text-center");
            var btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-primary weather-btn");
            btn.innerText = "Click For Weather";
            weatherBtn.appendChild(btn);

            btn.addEventListener("click", () => {
                try {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=58f3db876f3c02d3afbcf23e51416250`)
                        .then((res) => {
                            return res.json();
                        })
                        .then((resp) => {

                            alert(`🌐🌎🌐 The Current Weather is :- ${resp.weather[0].description} 🌐🌎🌐`);

                        })
                } catch (err) {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=58f3db876f3c02d3afbcf23e51416250`)
                        .then((res) => {
                            return res.json();
                        })
                        .then((resp) => {
                            alert(`The Current Weather is :- ${resp.weather[0].description}`);

                        })
                }

            })

            wholeDiv.appendChild(weatherBtn);

            // wholeDiv.appendChild(weatherBtn);




            // var btn = document.querySelector("button");
            // btn.addEventListener("click", () => {
            // fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + long + "&appid=58f3db876f3c02d3afbcf23e51416250")
            // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=58f3db876f3c02d3afbcf23e51416250`)
            //     .then((res) => {
            //         return res.json();
            //     })
            //     .then((resp) => {
            //         console.log(resp);
            //         var report = document.querySelector(".report");
            //         report.innerText += resp.main.temp;
            //         console.log(resp.weather[0].description);
            //     })
        })
    })


// });