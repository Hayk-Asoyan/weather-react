import React  from "react";
import "./header.scss"
import {connect} from "react-redux";


const Header = ({data}) => {
console.log(data)


        return(

            <div className="Header">

                {data &&
                <div>
                <h1>Weather</h1>
                    <h2>Loacation</h2>
                    <h3>{data.name}</h3>
                    <p>{data.main.temp}</p>
                    </div>
                }

            </div>
        );
}

const mapStateToProps = (state) => ({
    data: state.header.weatherData,
})
export default connect(mapStateToProps) (Header);