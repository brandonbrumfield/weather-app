import {fetchData} from './api.js'
import {processData} from './processing.js'
import { updateVisualData } from './display.js'

export {search_value, default_search}

const search_button = document.querySelector('#submit');
const form = document.querySelector('.search_bar');
const unit_button = document.querySelector('.units')
const location = document.querySelector(".location-span");

let units = "us"; 
let search_value = "Chicago";
let default_search = "Chicago";
let previous_search = "";

updateVisualData(search_value);

unit_button.addEventListener("click", () => {

    if (search_value == "") {
        search_value = location.textContent;
    }

    if (units == "us") {
        units = "metric";
        updateVisualData(search_value, units, "°C");
    }
    
    else {
        units = "us";
        updateVisualData(search_value, units, "°F");
    }
} )

search_button.addEventListener("click", () => {
    
    search_value = search.value;
    if (search_value != "") {
        updateVisualData(search_value);
    };
    search.value = "";
    search_value = "";
    

} )

form.addEventListener('submit', (e) => {
        e.preventDefault();
    })



