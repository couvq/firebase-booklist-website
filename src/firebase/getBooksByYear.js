import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getBooksByYear = async (year) => {
  const booksByYear = [];

  const q = query(collection(db, "books"), where("YearRead", "==", year));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    booksByYear.push(doc.data());
  });

  return booksByYear;
};