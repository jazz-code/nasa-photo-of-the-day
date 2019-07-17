import React from "react";

export default function ImgCard({ imgUrl }) {
  return (
    <div className="img-card">
      <img src={imgUrl} style={{ maxWidth: "150px" }} />
    </div>
  );
}
