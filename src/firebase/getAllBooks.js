import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getAllBooks = async () => {
  const books = [];

  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    books.push(doc.data());
  });
  
  return books;
};