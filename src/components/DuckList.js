import React from "react";
import DuckListCard from "./DuckListCard";

function DuckList({ ducks, handleDuckClick }) {
  return (
    <div className="duck-nav">
      {ducks.map((duck) => (
        <DuckListCard
          key={duck.id}
          duck={duck}
          handleDuckClick={handleDuckClick}
        />
      ))}
    </div>
  );
}

export default DuckList;
