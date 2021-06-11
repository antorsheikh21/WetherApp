 const submitBtn = document.getElementById('submitBtn');
 const cityName = document.getElementById('cityName');
 const city_name = document.getElementById('city_name');
 const temp_status = document.getElementById('temp_status');
 const temp_real_val = document.getElementById('temp_real_val');
 const data_hide = document.querySelector('.data_hide');


 const getInfo = async (e) => {
     e.preventDefault();
     let cityVal = cityName.value;
     if (cityVal === "") {
         city_name.innerText = `Please write the name before search`;
         data_hide.classList.add('dataHide')

     } else {
         try {
             cityName.value = "";

             let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9901c441ee6615fa3e06310d999a5498`;
             const response = await fetch(url);
             const data = await response.json();
             const arrData = [data];
             city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
             temp_real_val.innerText = arrData[0].main.temp;
             let tempMood = arrData[0].weather[0].main;

             //conditon to check sunny or cloudy;
             if (tempMood === "Clear") {
                 temp_status.innerText = "<i class='fas fa-sun' style='color:#eccc68'></i>"
             } else if (tempMood === "Clouds") {
                 temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
             } else if (tempMood === "Rain") {
                 temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
             } else {
                 temp_status.innerHTML = "<i class='fas fa-sun'  style='color:#eccc68'></i>"
             }

             data_hide.classList.remove('dataHide');

         } catch {
             city_name.innerHTML = `Please enter the city name Properly`;
             data_hide.classList.add('dataHide')
         }

     }


 }

 submitBtn.addEventListener('click', getInfo)





 cityVal = "";