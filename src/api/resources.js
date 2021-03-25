import React, { useEffect, useState } from "react";

const Resources = () => {
    const [articles, setarticles] = useState([]);
    useEffect(() => {
        loadarticles();
    }, []);
    const loadarticles = async () => {
        const response = await fetch(
            "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=mental%20health&pageNumber=1&pageSize=10&autoCorrect=true",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "b5c35766a7msh13d3dbb2a6fc7d6p190b8ajsn3e64119260f3",
                    "x-rapidapi-host":
                        "contextualwebsearch-websearch-v1.p.rapidapi.com",
                },
            }
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        setarticles(data);
    };

    return <div></div>;
};

export default Resources;
