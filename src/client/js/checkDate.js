
export function checkDate(LeaveDate,ReturnDate) {
    try {
        let lDate = new Date(LeaveDate)
        let rDate = new Date(ReturnDate)
        let timeDiff = Math.abs(rDate - lDate)
        const dateCalc = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
        console.log(dateCalc + " days");
    } catch(error){
        if(dateCalc >= 7){
            console.log('Trip must be within 7 days',error)
        } else{
            return dateCalc
        }

    }
    
}