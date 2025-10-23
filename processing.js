import {fetchData} from './api.js'


export async function processData(location, units) {
    const data = await fetchData(location, units);

    return {
        temp: data.currentConditions.temp,
        location: data.address,
        desc: data.description,
        feels_like: data.currentConditions.feelslike,
        high: data.days[0].tempmax,
        low: data.days[0].tempmin,
        humidity: data.currentConditions.humidity
    }
}

