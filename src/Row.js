import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import axios from "./axios-request";
import YouTube from "react-youtube";
const baseImgURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchTitle, isLargeRows, mode }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchTitle);
            // console.table(request);
            setMovies(request.data.results);
            return;
        };

        fetchData();
    }, [fetchTitle]);

    const handleClick = (movie) => {
        console.log(trailerUrl);
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className={`row ${mode === "light" && "row-light"}`}>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    const { id, poster_path, name, backdrop_path } = movie;
                    return (
                        <img
                            key={id}
                            src={`${baseImgURL}${
                                isLargeRows ? poster_path : backdrop_path
                            }`}
                            onClick={() => handleClick(movie)}
                            alt={name}
                            className={`row_image ${
                                isLargeRows && "row_imageLarge"
                            }`}
                        />
                    );
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;
