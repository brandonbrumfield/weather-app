


export async function fetchData(location, units) { 
  const fetched= await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=" + units + "&key=B7446MLHFM2VWC6Z5H3PVS6S6");
  const data = await fetched.json();
  console.log("Location used was " + location);
  return data;
    
}