const travelBtn = document.getElementById('destination-button')
//const formOne = document.getElementById('F1')
const formTwo = document.getElementById('F2')
const formThree = document.getElementById('F3')

travelBtn.addEventListener('click', findDestion)


export function findDestion(e) {
  e.preventDefault()
  const locationValue = document.getElementById('F1').value;
  
}


const firstApi = async function(location) {
  const res = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${geoUser}`)
  const resJ = await res.json();
  const LatGeo = Math.round(resJ.geonames[0].lat)
  const LngGeo = Math.round(resJ.geonames[0].lng)
  //console.log(LatGeo,LngGeo)  
  return secApi(LatGeo,LngGeo)
}

const secApi = async function(lat, lon) {
  const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}.6382&key=${wApi}&include=minutely`)
  const resJ = await res.json();
  const cityName = resJ.data[0].city_name
  //console.log(cityName)
  return thirdApi(cityName)
}

const thirdApi = async function(picLoc) {
  const res = await fetch(`https://pixabay.com/api/?key=${pApi}&q=${picLoc}&image_type=photo`)
  const resJ = await res.json()
  //console.log(resJ.hits[0].webformatURL)
  return resJ.hits[0].webformatURL
}


const postTravelData = async (data) => {
    console.log(data)
      const response = await fetch("http://localhost:8080/TravelData", {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify(data)
    });

      try {
        const newTravelData = await response.json();
        console.log(newTravelData);
        return newTravelData;
      }catch(error) {
        console.log("error", error);
    }
  
  }


