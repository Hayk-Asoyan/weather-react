import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/header/header";
import Info from "./components/info/info";

import Search from "./components/search/search";
import {getWeatherDataAsync} from "./Redux/weatherReducer";
import {connect} from "react-redux";

const App =({getWeatherDataAsync}) =>{
//     getWeather = async (event) => {
//         let searchvalue = event.target.elements.city.value;
// event.preventDefault()
//         const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API_KEY}&units=metric`);
//         const data = await apiUrl.json();
//         console.log(data)
//     }

useEffect(()=>{
    getWeatherDataAsync()
}, [getWeatherDataAsync])
        return (
            <div className="App">
                <Search/>
                <Header/>
                <Info/>
            </div>
        )

}
const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherDataAsync: () => dispatch(getWeatherDataAsync()),
    }
}
export default connect(null, mapDispatchToProps)(App)
