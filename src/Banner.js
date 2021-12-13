import React, { useState, useEffect } from "react";
import axios from "./axios-request";
import requests from "./requests";
const Banner = ({ mode }) => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests[0].fetchTitle);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return;
        };
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>

                    <button className="banner_button">My List </button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div
                className={`banner_fadeBottom ${
                    mode === "light" && "banner_bottomLight"
                }`}
            ></div>
        </header>
    );
};

export default Banner;
