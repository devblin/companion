import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Phrasestext from "../components/resources/phrases";
const Phrases = () => {
    const [phrases, setphrases] = useState([]);
    useEffect(() => {
        loadphrases();
    }, []);

    const loadphrases = async () => {
        const response = await fetch(
            "https://uncovered-treasure-v1.p.rapidapi.com/search/joy",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "b5c35766a7msh13d3dbb2a6fc7d6p190b8ajsn3e64119260f3",
                    "x-rapidapi-host": "uncovered-treasure-v1.p.rapidapi.com",
                },
            }
        );
        //console.log(response);
        const data = await response.json();
        console.log(data);
        await setphrases(data.results);
    };

    return (
        <div>
            {phrases.length > 0 &&
                phrases.map((element, index) => (
                    <div>
                        <Grid>
                            <Phrasestext
                                key={index}
                                text={element.text}
                                context={element.context}
                            />
                        </Grid>
                    </div>
                ))}
            {phrases.length === 0 && <div>loading......</div>}
        </div>
    );
};

export default Phrases;
