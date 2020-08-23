import {API_KEY} from "../API/API";

export const getWeather = async (event) => {
    let searchvalue = event.target.elements.city.value;
    event.preventDefault()
    const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API_KEY}&units=metric`);
    const data = await apiUrl.json();
    console.log(data)
}