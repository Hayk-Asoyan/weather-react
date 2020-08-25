import "./search.scss"
import React  from "react";

import {connect} from "react-redux";
import {getWeatherDataAsync} from "../../Redux/weatherReducer";




const Search = ({ getWeatherDataAsync}) => {



    return(
            <div className="Search">

                <form onSubmit={getWeatherDataAsync} >

                   <input  id="b" type="text" pattern="^[a-zA-Z]+$" name="city" placeholder="City" required/>
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

