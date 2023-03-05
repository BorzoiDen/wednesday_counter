import React, {useState} from 'react';
import './App.css';
import Interface from "./components/Interface/Interface";
import {Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {InterfaceContainer} from "./components/Interface/InterfaceContainer";
import {SettingsContainer} from "./components/Settings/SettingsContainer";
import {RootState} from "./Store/redux-store";
import {Dispatch} from "redux";

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <InterfaceContainer/> } />
            <Route path="/settings" element={ <SettingsContainer/> } />
        </Routes>
    </div>
  );
}

export default App;
