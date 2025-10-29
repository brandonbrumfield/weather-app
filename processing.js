import {fetchData} from './api.js'
import { updateVisualData } from './display.js';
import {default_search, search_value} from './index.js';


export async function processData(location, previous_location, units) {
    let data;

    try {
        data = await fetchData(location, units);
    }

    catch (error) {
        alert("Please enter a valid location. Make sure to check spelling.")
        console.log(error);

        try {
            data = await fetchData(previous_location, units);
        }

        catch(error) {
        alert("Please enter a valid location. Make sure to check spelling.")
        console.log(error);
        }
    }

    return {
        temp: data.currentConditions.temp,
        location: data.address,
        desc: data.description,
        feels_like: data.currentConditions.feelslike,
        high: data.days[0].tempmax,
        low: data.days[0].tempmin,
        humidity: data.currentConditions.humidity,
        conditions: data.currentConditions.conditions,
        resolved_location: data.resolvedAddress
    }
}

