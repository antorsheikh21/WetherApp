const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];

    let day = document.getElementById('day');
    day.innerText = days;

}

getCurrentDay();





//Get and firmat current time

const getCurrentTime=()=>{
    const today_data=document.getElementById('today_data');
    var months=[
        "Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"
    ];
var month=new Date().getMonth();
 var date=new Date().getDate()
today_data.innerText=`${date}-${months[month]}`
}

getCurrentTime()