import React  from "react";
import "./header.scss"
import {connect} from "react-redux";
import weather from "./../../images/weather.png"

const Header = ({data}) => {
console.log(data)
// let sunset = data?.dt;
// let date = new Date();
// date.setTime(sunset);
// let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        return(

            <div className="Header">
                <h1>Weather</h1>
                {data &&
                <div>

                    <h2>Loacation</h2>
                    <h3>{data.name}</h3>
                    <p className="temp"><img alt="weather" src={weather}/>{data.main.temp}°</p>

                    {/*<p>{sunset_date}</p>*/}
                    </div>
                }

            </div>
        );
}

const mapStateToProps = (state) => ({
    data: state.header.weatherData,
})
export default connect(mapStateToProps) (Header);