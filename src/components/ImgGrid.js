import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

export default function ImgGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`
      )
      .then(res => {
        console.log(res);
        const nasaIMG = res.data.url;
        setData(nasaIMG);
      });
  }, []);

  return (
    <div className="img-grid">
      {data.map(imgUrl => (
        <ImgCard key={imgUrl} imgUrl={imgUrl} />
      ))}
    </div>
  );
}
