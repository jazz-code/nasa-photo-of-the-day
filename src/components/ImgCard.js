import React from "react";

export default function ImgCard({ imgUrl, imgTitle, explanation }) {
  return (
    <div className="img-card">
      <h1 className="title">{imgTitle}</h1>
      <img src={imgUrl} />
      <p className="explanation">{explanation}</p>
    </div>
  );
}
