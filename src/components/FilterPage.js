import React from "react";
import BookCard from "./BookCard";

const FilterPage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#36454F",
        }}
      >
        <div style={{
            paddingTop: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem"
        }}>
          <BookCard />
        </div>
      </div>
    </>
  );
};

export default FilterPage;
