import React from "react";
import "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function ImgCard({ imgUrl, imgTitle, explanation }) {
  return (
    <Card>
      <Image src={imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{imgTitle}</Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
        <Card.Description>{explanation}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <a>
          <Icon name="user" />
          10 Friends
        </a> */}
      </Card.Content>
    </Card>
    // <div className="img-card">
    //   <h1 className="title">{imgTitle}</h1>
    //   <img src={imgUrl} />
    //   <p className="explanation">{explanation}</p>
    // </div>
  );
}
