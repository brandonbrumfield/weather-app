import { processData } from "./processing.js";

const location_span = document.querySelector(".location-span");
const location_desc = document.querySelector(".location-desc");
const temp_container = document.querySelector(".temp-span");
const feels_like_span = document.querySelector("#feels_like");
const high_span = document.querySelector("#high");
const low_span = document.querySelector("#low");
const humidity_span = document.querySelector("#humidity");

export async function updateVisualData(location, units="us", unit_symbol="°F") {
    let data = await processData(location, units);
    location_span.textContent = data.location;
    location_desc.textContent = data.desc;
    temp_container.textContent = data.temp + unit_symbol;
    feels_like_span.textContent = data.feels_like + unit_symbol;
    high_span.textContent = data.high + unit_symbol;
    low_span.textContent = data.low + unit_symbol;
    humidity_span.textContent = data.humidity + "%";
}


