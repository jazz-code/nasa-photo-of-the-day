import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";

export default function ImgGrid() {
  const [img, setImg] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);
  const [date, setDate] = useState(14);

  //`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-${date}`
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=5DVGERmcIOdjnPbBBrCLajpzKNWGe7LtRSAPCdBe&date=2019-07-${date}`
      )
      .then(res => {
        console.log(res.data.url);
        const imgUrl = res.data.url;
        setImg(imgUrl);
        const imgTitle = res.data.title;
        setTitle(imgTitle);
        const explanation = res.data.explanation;
        setExplanation(explanation);
      });
  }, [date]);

  return (
    <div className="img-grid">
      <button onClick={() => setDate(date - 1)}>Previous Image</button>
      <button onClick={() => setDate(date + 1)}>Next Image</button>
      <ImgCard imgTitle={title} imgUrl={img} explanation={explanation} />
    </div>
  );
}
//moment js
{
  /* {img.map(url => {
        return <ImgCard key={url} imgUrl={url} />;
      })} */
}
