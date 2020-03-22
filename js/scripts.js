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