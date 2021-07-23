const travelBtn = document.getElementById('destination-button')
//const formOne = document.getElementById('F1')
const formTwo = document.getElementById('F2')
const formThree = document.getElementById('F3')
const geoUser = 'isaiah'
const wApi =  '74c95ff83482407db3c55956cd979f60'
const pApi = '13827219-eabca8d6c1f49e20bd7fd6c27'

let VacationData = {}

travelBtn.addEventListener('click', findDestion())


export async function findDestion() {
  e.preventDefault()
  const locationValue = document.getElementById('F1').value;
  await firstApi(locationValue)
  await postTravelData(VacationData)
  console.log(VacationData) 
}


const firstApi = async function(location) {
  const res = await fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${geoUser}`)
  const resJ = await res.json();
  const geoLat = Math.round(resJ.geonames[0].lat)
  const geoLng = Math.round(resJ.geonames[0].lng)
  VacationData['LatGeo']  = geoLat
  VacationData['LngGeo']  = geoLng
  console.log(Vacation.LatGeo,Vacation.LngGeo)  
  return await secApi(LatGeo,LngGeo)
}

const secApi = async function(lat, lon) {
  const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}.6382&key=${wApi}&include=minutely`)
  const resJ = await res.json();
  const nameOfCity = resJ.data[0].city_name
  VacationData['cityName'] = nameOfCity
  console.log(Vacation.cityName)
  return await thirdApi(nameOfCity)
}

const thirdApi = async function(picLoc) {
  const res = await fetch(`https://pixabay.com/api/?key=${pApi}&q=${picLoc}&image_type=photo`)
  const resJ = await res.json()
  VacationData['locationImage'] = resJ.hits[0].webformatURL
  console.log(VacationData.locationImage)
  return VacationData
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

