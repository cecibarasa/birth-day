var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);

    if (century === "") {
        alert("Input the correct gender");
        return false;
    } else if (year === "") {
        alert("Input the correct year");
        return false;
    } else if (month === "") {
        alert("Input the correct month");
        return false;
    } else if (dayOfMonth === "") {
        alert("input the correct date");
        return false;
    }
}

//Calculate function
function calculateDay() {
    getInput();
    dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));

}

function checkDayOfWeek() {
    day = calculateDay();
    checkGender();
    console.log("The function runs"); //Test checkDayOfWeek
}

//arrays
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//get selected gender
function checkGender() {
    var gen = document.getElementsByName("elite");
    if (gen[0].checked === true) {
        var gender = "male";
    } else if (gen[1].checked == true) {
        var gender = "female";
    } else {
        console.log("pass"); //Test the radio buttons
    }
    switch (gender) {
        case gender = "male":
            switch (day) {
                case (0 || -0):
                    document.getElementById("result").innerHTML = "You were born on a Sunday." + "  " + "Your Akan name is " + maleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "You were born on a Monday." + " " + "Your Akan name is " + maleNames[1];
                    break;
                case (2 || -2):
                    document.getElementById("result").innerHTML = "You were born on a Tuesday." + " " + "Your Akan name is " + maleNames[2];
                    break;
                case (3 || -3):
                    document.getElementById("result").innerHTML = "You were born on a Wednesday." + " " + "Your Akan name is " + maleNames[3];
                    break;
                case (4 || -4):
                    document.getElementById("result").innerHTML = "You were born on a Thursday." + " " + "Your Akan name is " + maleNames[4];
                    break;
                case (5 || -5):
                    document.getElementById("result").innerHTML = "You were born on a Friday." + " " + "Your Akan name is " + maleNames[5];
                    break;
                case (6 || -6):
                    document.getElementById("result").innerHTML = "You were born on a Saturday." + " " + "Your Akan name is " + maleNames[6];
                    break;
                default:
                    console.console.log("Pass"); //Test male case
            }
            break;
        case gender = "female":
            switch (day) {
                case 0 || -0:
                    document.getElementById("result").innerHTML = "You were born on a Sunday." + "  " + "Your Akan name is " + femaleNames[0];
                    break;
                case 1 || -1:
                    document.getElementById("result").innerHTML = "You were born on a Monday." + " " + "Your Akan name is " + femaleNames[1];
                    break;
                case 2 || -2:
                    document.getElementById("result").innerHTML = "You were born on a Tuesday." + " " + "Your Akan name is " + femaleNames[2];
                    break;
                case 3 || -3:
                    document.getElementById("result").innerHTML = "You were born on a Wednesday." + " " + "Your Akan name is " + femaleNames[3];
                    break;
                case 4 || -4:
                    document.getElementById("result").innerHTML = "You were born on a Thursday." + " " + "Your Akan name is " + femaleNames[4];
                    break;
                case 5 || -5:
                    document.getElementById("result").innerHTML = "You were born on a Friday." + " " + "Your Akan name is " + femaleNames[5];
                    break;
                case 6 || -6:
                    document.getElementById("result").innerHTML = "You were born on a Saturday." + " " + "Your Akan name is " + femaleNames[6];
                    break;
            }
            break
        default:
            console.log("pass"); //Test gender switch
    }
}
result