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
          <BookCard 
          ImageURL={"https://m.media-amazon.com/images/I/51mN3bY0JjL._SY346_.jpg"}
          Title={"The Subtle Art of Not Giving a Fuck"}
          Author={"Mark Manson"}
          Recommendation={"I would recommend this to anyone"}
          PurchaseLink={"https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive-ebook/dp/B019MMUA8S"}
           />
        </div>
      </div>
    </>
  );
};

export default FilterPage;
