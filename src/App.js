import Row from "./Row";
import React, { useState } from "react";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

const getMode = () => {
    const currentMode = localStorage.getItem("mode");
    if (!currentMode) {
        return "dark";
    } else {
        return currentMode;
    }
};
function App() {
    const [mode, setMode] = useState(getMode());

    return (
        <div className={`app`}>
            <Navbar mode={mode} setMode={setMode} />
            <Banner mode={mode} />
            {requests.map((eachRequest, index) => {
                // const { title, fetchTitle } = eachRequest;

                return <Row key={index} {...eachRequest} mode={mode} />;
            })}
            <div
                className={`underlay ${mode === "light" && "underlay-white"}`}
            ></div>
        </div>
    );
}

export default App;
