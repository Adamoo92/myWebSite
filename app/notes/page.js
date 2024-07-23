"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Book from "./components/book";
import { bookList } from "./data/list-data";
import { booksColor } from "./data/color-data";
import BookOpen from "./components/bookOpen";

export default function Notes() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="text-ownBlack bg-[#FFDC9B] w-full h-full flex flex-col justify-start items-center relative">
      {/* <div className="w-full max-w-7xl h-full relative pt-32 grid grid-cols-5 gap-y-2.5 auto-rows-min">
        {bookList.map((book, i) => (
          <Book
            key={i}
            icon={book}
            bgColor={booksColor[i]}
            onClick={() => setSelected(book)}
          />
        ))}
      </div> */}
      {/* <BookOpen /> */}
    </section>
  );
}
