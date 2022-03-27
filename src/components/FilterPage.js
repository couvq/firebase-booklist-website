import { Grid } from "@mui/material";
import React from "react";
import BookCard from "./BookCard";

const FilterPage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          background: "#36454F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingTop: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <BookCard
                ImageURL={
                  "https://m.media-amazon.com/images/I/51mN3bY0JjL._SY346_.jpg"
                }
                Title={"The Subtle Art of Not Giving a Fuck"}
                Author={"Mark Manson"}
                Recommendation={
                  "I would recommend this to anyone really, it was a great read"
                }
                PurchaseLink={
                  "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive-ebook/dp/B019MMUA8S"
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <BookCard
                ImageURL={
                  "https://m.media-amazon.com/images/I/51mN3bY0JjL._SY346_.jpg"
                }
                Title={"The Subtle Art of Not Giving a Fuck"}
                Author={"Mark Manson"}
                Recommendation={
                  "I would recommend this to anyone really, it was a great read"
                }
                PurchaseLink={
                  "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive-ebook/dp/B019MMUA8S"
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <BookCard
                ImageURL={
                  "https://m.media-amazon.com/images/I/51mN3bY0JjL._SY346_.jpg"
                }
                Title={"The Subtle Art of Not Giving a Fuck"}
                Author={"Mark Manson"}
                Recommendation={
                  "I would recommend this to anyone really, it was a great read"
                }
                PurchaseLink={
                  "https://www.amazon.com/Subtle-Art-Not-Giving-Counterintuitive-ebook/dp/B019MMUA8S"
                }
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
