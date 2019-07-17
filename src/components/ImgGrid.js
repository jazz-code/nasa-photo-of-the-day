import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

export default function ImgGrid() {
  const [img, setImg] = useState([]);
  console.log(img);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15`
      )
      .then(res => {
        console.log(res.data.url);
        const imgUrl = res.data.url;
        setImg(imgUrl);
      });
  }, []);

  return (
    <div className="img-grid">
      {/* {img.map(url => {
        return <ImgCard key={url} imgUrl={url} />;
      })} */}
      <ImgCard imgUrl={img} />
    </div>
  );
}
