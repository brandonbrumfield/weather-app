import { processData } from "./processing.js";

const location_span = document.querySelector(".location-span");
const location_desc = document.querySelector(".location-desc");
const temp_container = document.querySelector(".temp-span");
const cond_container = document.querySelector("#cond_span");
const feels_like_span = document.querySelector("#feels_like");
const high_span = document.querySelector("#high");
const low_span = document.querySelector("#low");
const humidity_span = document.querySelector("#humidity");
const submit = document.querySelector(".submit")

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const info_text = document.querySelectorAll(".info, .temp, .temp-span, .units");





export async function updateVisualData(location, units="us", unit_symbol="°F") {
    let data = await processData(location, units);

    updateBackground(data);


    location_span.textContent = formatLocation(data.resolved_location);
    location_desc.textContent = data.desc;
    temp_container.textContent = data.temp + unit_symbol;
    cond_container.textContent = data.conditions;
    feels_like_span.textContent = data.feels_like + unit_symbol;
    high_span.textContent = data.high + unit_symbol;
    low_span.textContent = data.low + unit_symbol;
    humidity_span.textContent = data.humidity + "%";
}

async function updateBackground(data) {
    switch (data.conditions) {
        case "Clear":
            body.style.backgroundColor = "rgba(231, 215, 68, 0.692)";
            location_span.style.color = "black";
            location_desc.style.color = "black";
            wrapper.style.backgroundColor = "rgb(138, 184, 206)";
            submit.style.backgroundColor = wrapper.style.backgroundColor;
            submit.style.color = "black";
            
            info_text.forEach(text => {
                text.style.color = "rgb(231, 215, 68)";
            });
            
            break;

        case "Snow":
        case "Snow, Overcast":
            body.style.backgroundColor = "white";
            location_span.style.color = "black";
            location_desc.style.color = "black";
            wrapper.style.backgroundColor = "rgb(138, 184, 206)";
            submit.style.backgroundColor = wrapper.style.backgroundColor;
            
            info_text.forEach(text => {
                text.style.color = "white";
            });
            
            break;


        case "Partially cloudy":
            body.style.backgroundColor = "rgba(207, 209, 228, 0.69)";
            location_span.style.color = "black";
            location_desc.style.color = "black";
            wrapper.style.backgroundColor = "rgb(142, 142, 230)";
            submit.style.backgroundColor = wrapper.style.backgroundColor;
            submit.style.color = location_span.style.color;
            
            info_text.forEach(text => {
                text.style.color = "rgb(207, 209, 228)";
            });
            
            break;

        case "Overcast":
            body.style.backgroundColor = "rgb(122, 122, 122)";
            location_span.style.color = "rgba(206, 206, 206, 1)";
            location_desc.style.color = "rgba(206, 206, 206, 1)";
            wrapper.style.backgroundColor = "rgb(46, 46, 95)";
            submit.style.backgroundColor = wrapper.style.backgroundColor;
            submit.style.color = location_span.style.color;
            
            info_text.forEach(text => {
                text.style.color = "rgba(206, 206, 206, 1)";
            });
            
            break;

        case "Rain":
        case "Rain, Overcast":
        case "Rain, Partially cloudy":
        case "Rain, Clear":
            body.style.backgroundColor = "rgba(98, 101, 129, 1)";
            location_span.style.color = "rgba(214, 218, 255, 1)";
            location_desc.style.color = "rgba(214, 218, 255, 1)";
            wrapper.style.backgroundColor = "rgba(35, 35, 156, 1)";
            submit.style.backgroundColor = wrapper.style.backgroundColor;
            submit.style.color = location_span.style.color;
            
            info_text.forEach(text => {
                text.style.color = "rgba(112, 124, 233, 1)";
            });
            
            break;

            

        default: 
            body.style.backgroundColor = "white";
            wrapper.style.backgroundColor = "gray";
            
            info_text.forEach(text => {
                text.style.color = "white";
            });
    }
}


function formatLocation(location) {

    for (let i = 0; i < location.length; i++) {

    }

    return location.charAt(0).toUpperCase() + location.slice(1);



}


//rgb(138, 184, 206); blue
//rgb(231, 215, 68) yellow