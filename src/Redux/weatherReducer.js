import Axios from "axios"
import {API_KEY} from "../API/API";

const DATA_WORKER = 'DATA_WORKER'
const FAILURE = "FAILURE"

const INITIAL_STATE = {
    weatherData: {},

}

export const weatherReducer = (state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case DATA_WORKER:
            return {
                ...state,
                data: state= action.payload,
            }
        case FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state


    }
};

const getWeatherData = (getWeatherData) => ({
    type: DATA_WORKER,
    payload: getWeatherData,
})

const Failure = (error) => ({
    type: FAILURE,
    payload: error,
})


export const getWeatherDataAsync = (event) => {
    return async (dispatch) => {

        try {
            let searchvalue = event.target.elements.city.value;
            event.preventDefault()
            const response = await Axios(`http://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=${API_KEY}&units=metric`)
            dispatch(getWeatherData(response.data))
            console.log(response.data, "aaaa")
        } catch (err) {
            dispatch(Failure(err))
        }
    }
}


