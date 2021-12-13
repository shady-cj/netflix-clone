import React, { useState, useEffect } from "react";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = ({ mode, setMode }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleShow = () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        };
        window.addEventListener("scroll", handleShow);

        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, []);

    const handleMode = () => {
        if (mode === "dark") {
            localStorage.setItem("mode", "light");
        } else {
            localStorage.setItem("mode", "dark");
        }
        setMode(localStorage.getItem("mode"));

        return;
    };
    return (
        <div
            className={`nav ${
                show && mode === "light"
                    ? "nav-white"
                    : show && mode === "dark"
                    ? "nav-black"
                    : ""
            } `}
        >
            <img
                // src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
                className="nav_logo"
            />

            <div className="nav_icon">
                <BsFillMoonFill
                    className={`icon ${mode === "light" && "icon_black"}`}
                    onClick={handleMode}
                />
            </div>
        </div>
    );
};

export default Navbar;
