import React from "react";
import "./genreCard.css";

function GenreCard({ data, addGenre, selectedGenre, deleteActionGenre }) {
  // TODO: adding border on selected one left

  // ! need to add when on click on card it should be dis-selected also.

  const hasSelected = selectedGenre.find((x) => x === data.heading);

  const newStyle = hasSelected ? "selected-card" : "";

  return (
    <div
      className={"card-body " + data.heading + " " + newStyle}
      onClick={() => {
        hasSelected ? deleteActionGenre(data.heading) : addGenre(data.heading);
      }}
    >
      <h1 className="card-title">{data.heading}</h1>

      <div className="img-wrapper">
        <img src={data.img} alt="#" />
      </div>
    </div>
  );
}

export default GenreCard;
