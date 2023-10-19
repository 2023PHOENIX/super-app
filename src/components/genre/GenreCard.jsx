import React from "react";
import "./genreCard.css";

function GenreCard({ data,addGenre }) {

  

  return (
    <div
      className={"card-body " + data.heading}
      onClick={() => addGenre(data.heading)}
    >
      <h1 className="card-title">{data.heading}</h1>

      <div className="img-wrapper">
        <img src={data.img} alt="#" />
      </div>
    </div>
  );
}

export default GenreCard;
