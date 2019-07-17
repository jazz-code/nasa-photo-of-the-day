import React from "react";

export default function ImgCard({ imgUrl, imgTitle }) {
  return (
    <div className="img-card">
      <h1 className="title">{imgTitle}</h1>

      <img src={imgUrl} />
    </div>
  );
}
