import React  from "react";
import "./header.scss"
import {connect} from "react-redux";
import weather from "./../../images/weather.png"

const Header = ({data}) => (

            <div className="Header">
                <h1>Weather</h1>
                { data &&
                <div>

                    <h2>Loacation</h2>
                    <h3>{data.name}</h3>
                    <p className="temp"><img alt="weather" src={weather}/>{data?.main.temp}°</p>

                    </div>

                }

            </div>
        );


const mapStateToProps = (state) => ({
    data: state.header.weatherData,
})
export default connect(mapStateToProps) (Header);