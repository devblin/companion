import React, { useEffect, useState } from "react";

const Videos = () => {
    const [videos, setvideos] = useState([]);
    useEffect(() => {
        loadvideos();
    }, []);

    const loadvideos = async () => {
        const response = await fetch(
            "https://youtube-search.p.rapidapi.com/search?part=snippet&key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc&q=cats",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "b5c35766a7msh13d3dbb2a6fc7d6p190b8ajsn3e64119260f3",
                    "x-rapidapi-host": "youtube-search.p.rapidapi.com",
                },
            }
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        setvideos(data);
    };

    return <div></div>;
};

export default Videos;
