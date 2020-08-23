import React from "react";
import "./info.scss";
import {connect} from "react-redux";
import wind_weather from "./../../images/wind_weather.png";
import humidity from "./../../images/humidity.png";
import pressure from "./../../images/pressure.png"

const Info = ({data}) => {
    return (
        <div className="Info">
            {data &&
            <div className="informer">
                <p className="wind"><img alt="wind" src={wind_weather}/>{data?.wind.speed}м/с, С</p>
                <p className="wind"><img alt="humidity" src={humidity}/>{data?.main.humidity}%</p>
                <p className="wind"><img alt="pressure" src={pressure}/>{data?.main.pressure}мм рт. ст.</p>
            </div>
            }
        </div>
    );
}
const mapStateToProps = (state) => ({
    data: state.header.weatherData,
})
export default connect(mapStateToProps)(Info)
