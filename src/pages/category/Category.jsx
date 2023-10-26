import React from "react";
import "./category.css";
import GenreCard from "../../components/genre/GenreCard";

import categoryData from "../../utils/data.json";
import { useState } from "react";

function Category() {
  const [selectedGenre, setSelectedGenre] = useState([]);

  const addSelectedGenre = (data) => {
    const check = selectedGenre.find((x) => x === data);

    if (check === undefined) {
      setSelectedGenre((prev) => [...prev, data]);
      localStorage.setItem("user-selected-category", [...selectedGenre, data]);
    }
  };
  const deleteActionGenre = (data) => {
    const newList = selectedGenre.filter((x) => x !== data);
    setSelectedGenre(newList);

    localStorage.setItem("user-selected-category", newList);
  };

  const nextPageHandler = () => {
    // TODO: next page handler.
    alert("please redirect me.");
  };

  return (
    <div className="category-page">
      <div className="side-bar">
        <h1>Super App</h1>

        <div className="message-text">Choose your entertainment category</div>

        <div className="category-pick">
          {selectedGenre.map((genre, i) => (
            <div className="picked-button" key={i}>
              {genre} <span onClick={() => deleteActionGenre(genre)}>x</span>{" "}
            </div>
          ))}
        </div>
        {selectedGenre.length < 3 && (
          <div className="alert-message">⚠️ Minimum 3 category required</div>
        )}
      </div>
      <div className="genre-category">
        {categoryData.map((genre) => (
          <GenreCard
            data={genre}
            key={genre.id}
            addGenre={addSelectedGenre}
            selectedGenre={selectedGenre}
            deleteActionGenre={deleteActionGenre}
          />
        ))}
      </div>

      <button className="next-button" onClick={nextPageHandler}>
        Next Page
      </button>
    </div>
  );
}

export default Category;
