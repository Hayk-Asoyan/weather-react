import "./search.scss"
import React  from "react";

import {connect} from "react-redux";
import {getWeatherDataAsync} from "../../Redux/weatherReducer";




const Search = ({ getWeatherDataAsync},event) => {

 return(
            <div className="Search">
                <form onSubmit={getWeatherDataAsync} >

                   <input  type="text"   name="city" placeholder="City"/>
                        <button >Search</button>
                </form>
            </div>
    )};




const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherDataAsync: (data) => dispatch(getWeatherDataAsync(data)),
    }
}

export default connect(null, mapDispatchToProps)(Search)

