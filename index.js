import {fetchData} from './api.js'
import {processData} from './processing.js'
import { updateVisualData } from './display.js'

const search_button = document.querySelector('#submit');
const form = document.querySelector('.search_bar');
const unit_button = document.querySelector('.units')

let units = "us"; 
let search_value = "Baton Rouge";

updateVisualData(search_value);

unit_button.addEventListener("click", () => {
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
    updateVisualData(search_value);
} )

form.addEventListener('submit', (e) => {
        e.preventDefault();
    })



