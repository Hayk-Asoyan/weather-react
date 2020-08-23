import "./search.scss"
import React from "react";

import {connect} from "react-redux";
import {getWeatherDataAsync} from "../../Redux/weatherReducer";

const Search = ({data, getWeatherDataAsync},event) => {
    console.log(data)

        return (
            <div className="Search">
                <form onSubmit={getWeatherDataAsync} >

                   <input  type="text"  name="city" placeholder="City"/>
                        <button >Search</button>
                </form>
            </div>
    );

    }

const mapStateToProps = (state) => ({
    data: state.header.weatherData,
})
const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherDataAsync: (data) => dispatch(getWeatherDataAsync(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

