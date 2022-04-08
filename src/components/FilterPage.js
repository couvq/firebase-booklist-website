import { Grid, Typography } from "@mui/material";
import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";

import { getAllBooks } from "../firebase/getAllBooks";
import { getBooksByYear } from "../firebase/getBooksByYear";

import { motion, AnimatePresence } from "framer-motion";

const FilterPage = () => {
  const [year, setYear] = useState("All");
  const [books, setBooks] = useState([]); // will hold all of our books
  const [filteredBooks, setFilteredBooks] = useState([]); // this will hold our "filtered books", initially just a copy of books
  const [numBooks, setNumBooks] = useState(0); // 0 books to begin with

  useEffect(() => {
    // initially populate all of our books
    getAllBooks().then((books) => {
      setBooks(books);
      setFilteredBooks(books);
      setNumBooks(books.length);
    });
  }, []);

  useEffect(() => {
    //set our filtered books when year state changes
    if (year !== "All") {
      getBooksByYear(year).then((filteredBooks) => {
        setFilteredBooks(filteredBooks);
        setNumBooks(filteredBooks.length);
        return;
      });
    }
    setFilteredBooks(books);
    setNumBooks(books.length);

  }, [year]);

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
            paddingBottom: "5rem"
          }}
        >
          <FormControl size="small">
            <Select
              sx={{
                background: "#fff"
              }}
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{
            color: "white"
          }}>Number of Books Read: {numBooks}</Typography>
          <Grid container spacing={4} sx={{ paddingTop: "2rem" }}>
            {/* <Grid item xs={12} sm={6} md={6} lg={4}>
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
            </Grid> */}

            {filteredBooks.map((book) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <motion.div layout animate={{ opacity: [0, 1], scale: [0, 1]}}>
                    <AnimatePresence>
                      <BookCard
                        ImageURL={book.ImageURL}
                        Title={book.Title}
                        Author={book.Author}
                        Recommendation={book.Recommendation}
                        PurchaseLink={book.PurchaseLink}
                      />
                    </AnimatePresence>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default FilterPage;
