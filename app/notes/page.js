"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Book from "./components/book";
import { bookList } from "./data/list-data";
import { booksColor } from "./data/color-data";

export default function Notes() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="text-ownBlack bg-white w-full h-full flex justify-center items-center">
      <div className="w-full max-w-5xl h-full pt-32 grid grid-cols-5 gap-6 auto-rows-min">
        {bookList.map((book, i) => (
          <Book
            className="h-52"
            key={i}
            title1={book}
            title2="Foundations"
            time="last time"
            Num={book.length}
            style={{ backgroundColor: booksColor[i] }}
            src={`/image/notes/icons/${book}.svg`}
          />
        ))}
      </div>
    </section>
  );
}
