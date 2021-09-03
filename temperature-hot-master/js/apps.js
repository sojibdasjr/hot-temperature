const API_KEY = `46d046e2bbc315eeeed9e8a0876ab9f6`
const errorDiv = document.getElementById('error');
const searchTemperature =()=>{
    const city = document.getElementById('city-name').value;
    errorDiv.innerText = '';
    if(city === ""){
        errorDiv.innerText = 'Search Can not be empty'
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const setInnerText = (id, text)=>{
    document.getElementById(id).innerText = text; 
}

const displayTemperature = temperture =>{
    setInnerText('city', temperture.name);
    setInnerText('temperature', temperture.main.temp);
    setInnerText('condition', temperture.weather[0].main)
    //set icon
    const url = `http://openweathermap.org/img/wn/${temperture.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('w-icon');
    imgIcon.setAttribute('src', url);
}