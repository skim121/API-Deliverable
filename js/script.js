// Covid 19 Information Pull

async function getCovidData(e){
    e.preventDefault();
    // For simplicity and sake of time, took the RegEx pattern from the internet to add commas tp numbers 
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const userInput = $("#countries").val();
    // API for cases and deaths
    const url = 
    `https://covid-api.mmediagroup.fr/v1/cases?country=${userInput}`;
    const response = await fetch(url);
    const data = await response.json(); 
    // API for vaccine stats
    const url2 = 
    `https://covid-api.mmediagroup.fr/v1/vaccines?country=${userInput}`;
    const response2 = await fetch(url2);
    const data2 = await response2.json(); 
    $("h3").html(`${userInput}`);
    $("#cases").html(numberWithCommas(data.All.confirmed));
    $("#deaths").html(numberWithCommas(data.All.deaths));
    $("#pop").html(numberWithCommas(data.All.population));
    $("#vaccinated").html(numberWithCommas(data2.All.people_vaccinated));
    $("#partvac").html(numberWithCommas(data2.All.people_partially_vaccinated));
};

$("form").on("submit", getCovidData);
