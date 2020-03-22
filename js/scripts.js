var century, year, month, dayOfMonth, day;
//Get input
function getInput(){
    century = parseInt(document.getElementById("century").vaue);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);

    if(century == ""){
        alert("Input correct gender");
        return false;
    }else if (year == ""){
        alert("Input correct year");
        return false;
    }else if (month == ""){
        alert ("Input correct month");
        return false;
    }else if(dayOfMonth == ""){
        alert("Input correct date");
        return false;
    }
}
//Calculate function
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the CalculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
    dayOfWeek = dayOfWeek * -1; 
    }
    else if (dayOfWeek > 0) {
        return dayOfWeek; 
    }
}

