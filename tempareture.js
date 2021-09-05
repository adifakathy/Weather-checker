const containerWeather = displayStyle => {
    document.getElementById('weather-container').style.display = displayStyle;
}
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchTemp = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
   
    

    
    if (searchText == '') {
        alert('Something went Wrong.Please Try again!')
    }
     
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=6438fcd4571c301271322af20f84aa95`;
    toggleSpinner('block');
    containerWeather('none');
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));
    
  
}


const displayResult = coord => {
    toggleSpinner('none');
    containerWeather('block');
    const searchresult = document.getElementById('search-result');
    
    searchresult.textContent = '';
    const temperature = Math.round(coord.main.temp);
    searchresult.innerHTML = `
    <img id="weather-icon" src="http://openweathermap.org/img/wn/${coord.weather[0].icon}@2x.png">
    <h1>${coord.name}</h1>
    <h3 id="temp-id"><span>${temperature -273}</span>&deg;C</h3>
    <h1 id="wether-id" class="lead">${coord.weather[0].description}</h1>`;
    searchresult.appendChild(div);
    
 
}







