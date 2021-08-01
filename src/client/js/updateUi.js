
const updateUi = async () => {
    const request = await fetch("http://localhost:8080/all")
    const resData = await request.json()
    document.getElementById("itemOne").innerHTML = `City: ${resData.city}`
    document.getElementById("itemTwo").innerHTML = `Random: ${resData.descriptionTwo}`
    document.getElementById('itemThree').innerHTML = `Picture: ${resData.image}`
    document.getElementById("destination_information").style.display = "block"
    console.log(resData)
  }

export { updateUi }