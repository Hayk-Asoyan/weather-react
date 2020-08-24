import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Info from "./components/info/info";

import Search from "./components/search/search";

const App =() =>{
//


        return (
            <div className="App">
                <Search/>
                <Header/>
                <Info/>
            </div>
        )

}

export default App
