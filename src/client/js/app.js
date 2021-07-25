const travelBtn = document.getElementById('destination-button')
//const formOne = document.getElementById('F1')
const formTwo = document.getElementById('F2')
const formThree = document.getElementById('F3')

const geoUser = process.env.GEO_USER  
const wApi = process.env.WEATHER_API_KEY   
const pApi = process.env.PIXABY_API_KEY 


//http://api.geonames.org/searchJSON?username=maykeloenning&maxRows=10&q="
//http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo


let VacationData = {}

travelBtn.addEventListener('click', findDestion)


export async function findDestion(e) {
  e.preventDefault()
  let locationValue = document.getElementById('F1').value;
  await firstApi(locationValue);
  await postData(VacationData);
  console.log(VacationData);
}

const firstApi = async function(location) {
  const res = await fetch(`http://api.geonames.org/searchJSON?username=${geoUser}&maxRows=10&q=${location}`)
  const resJ = await res.json();
  const geoLat = Math.round(resJ.geonames[0].lat)
  const geoLng = Math.round(resJ.geonames[0].lng)
  VacationData['LatGeo']  = geoLat
  VacationData['LngGeo']  = geoLng
  console.log(VacationData.LatGeo,VacationData.LngGeo)  
  return await secApi(geoLat,geoLng)
}

const secApi = async function(lat, lon) {
  const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}.6382&key=${wApi}&include=minutely`)
  const resJ = await res.json();
  const nameOfCity = resJ.data[0].city_name
  VacationData['cityName'] = nameOfCity
  console.log(VacationData.cityName)
  return await thirdApi(nameOfCity)
}

const thirdApi = async function(picLoc) {
  const res = await fetch(`https://pixabay.com/api/?key=${pApi}&q=${picLoc}&image_type=photo`)
  const resJ = await res.json()
  VacationData['locationImage'] = resJ.hits[0].webformatURL
  console.log(VacationData.locationImage)
  return VacationData
}


async function postData(data) {
    console.log(data)
      const res = await fetch("http://localhost:8080/vactionData", {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify({data:data}),
    });
    console.log(res)
    try {
      const newTravelData = await res.json();
      console.log(newTravelData);
      return newTravelData;
    }catch(error) {
      console.log("error", error);
    }
  
  }
  

