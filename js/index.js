function preloader() {
    const imagesList = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/hydro.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let btnList = document.querySelectorAll("button");

let affordableWays = {
    Solar: {
        heading: "Community Solar: ",
        bodyText: "A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs. It will increase countries energy security through reliance on an indigenous, inexhaustible and mostly import-independent resource, enhance sustainability, reduce pollution, lower the costs of mitigating global warming, and keep fossil fuel prices lower than otherwise. ",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solar Panels"
    },
    Wind: {
        heading: "Wind Energy",
        bodyText: "The cost of wind power has decreased by 90 percent since the 1980s. With declining costs comes more incentive to invest, and communities have come together to build wind farms to power local businesses. By operating off the power of small wind farms, communities who suffer from high energy costs can work together for a better future.Yearly wind energy production is also growing rapidly and has reached around 4% of worldwide electric power usage, 11.4% in the EU. ",
        imgUrl: "./img/wind.jpg",
        imgAlt: "Wind Turbines"
    },
    Hydro: {
        heading: "Hydroelectric Energy: ",
        bodyText: "Hydroelectric power is the cheapest source of renewable energy, at an average of $0.05 per kilowatt hour (kWh), but the average cost of developing new power plants based on onshore wind, solar photovoltaic (PV), biomass or geothermal energy is now usually below $0.10/kWh. Not far behind that is offshore wind, which costs close to $0.13/kWh.",
        imgUrl: "./img/hydro.jpg",
        imgAlt: "Water Dam"
    }
};

let content = document.getElementById("content");

btnList[0].setAttribute("id", "active-button");

content.innerHTML = `<h1>${affordableWays.Solar.heading}</h1>
     <img src="${affordableWays.Solar.imgUrl}" alt="${affordableWays.Solar.imgAlt}">
     <p>${affordableWays.Solar.bodyText}</p>`;

function handleSlctn() {

    for (let i = 0; i < btnList.length; i++) {
        if (btnList[i].hasAttribute("id")) {
            btnList[i].removeAttribute("id");
        }
    }

    this.setAttribute("id", "active-button");

    for (let i = 0; i < btnList.length; i++) {
        if (btnList[i].hasAttribute("id")) {
            if (i == 0) {
                content.innerHTML = `<h1>${affordableWays.Solar.heading}</h1><img src="${affordableWays.Solar.imgUrl}" alt="${affordableWays.Solar.imgAlt}"><p>${affordableWays.Solar.bodyText}</p>`;
            }
            if (i == 1) {
                content.innerHTML = `<h1>${affordableWays.Wind.heading}</h1><img src="${affordableWays.Wind.imgUrl}" alt="${affordableWays.Wind.imgAlt}"><p>${affordableWays.Wind.bodyText}</p>`;
            }
            if (i == 2) {
                content.innerHTML = `<h1>${affordableWays.Hydro.heading}</h1><img src="${affordableWays.Hydro.imgUrl}" alt="${affordableWays.Hydro.imgAlt}"><p>${affordableWays.Hydro.bodyText}</p>`;
            }
        } 
    } 
} 

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", handleSlctn)
}
