
export function checkDate(LeaveDate,ReturnDate) {
    
    let lDate = new Date(LeaveDate)
    let rDate = new Date(ReturnDate)
    let timeDiff = Math.abs(rDate - lDate)
    const dateCalc = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    console.log(dateCalc + " days");

    if(dateCalc >= 7){
        console.error('Trip must be within 7 days')
    } else{
        return dateCalc
    }

    
}