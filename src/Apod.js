import React from "react";

function Apod(props) {
    const { apodData } = props;

    return (
        <div>
            <h1>{apodData.title}</h1>
            <h2>{apodData.date}</h2>
            <img src={apodData.url} />
            <p>{apodData.explanation}</p>
        </div>
    );
}

export default Apod;
