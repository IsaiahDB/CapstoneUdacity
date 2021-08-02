

const updateUi = async () => {
    const request = await fetch("http://localhost:8080/all")
    const resData = await request.json()
    document.getElementById("itemOne").innerHTML = `City: ${resData.city}`
    document.getElementById("itemTwo").innerHTML = `Weather: ${resData.description}`
    document.getElementById('itemThree').innerHTML = `Country: ${resData.country}`
    document.getElementById('itemFour').setAttribute('src', resData.imageloc)
    document.getElementById("destination_information").style = "display: block; "
    document.getElementById('pdf-button').style.display = "block"
    console.log(resData)
  }

export { updateUi }