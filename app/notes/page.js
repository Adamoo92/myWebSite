"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Book from "./components/book";
import { bookList } from "./data/list-data";
import NotesBg from "./components/notes_bg";
import BookOpen from "./components/bookOpen";

export default function Notes() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="text-ownBlack bg-orange-100 w-full h-full flex flex-col justify-start items-center relative">
      <NotesBg />
      <div className="w-full max-w-7xl h-full relative pt-32">
        <AnimatePresence mode="popLayout">
          {selected == null ? (
            <motion.div
              className="w-full grid grid-cols-5 grid-rows-none gap-y-10 relative"
              key="bookAll"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {bookList.map((list, i) => (
                <Book key={i} list={list} onClick={() => setSelected(i)} />
              ))}
            </motion.div>
          ) : (
            <>
              <BookOpen
                key={selected}
                item={bookList[selected]}
                onClick={() => setSelected(null)}
                initial={{ y: "100%", opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
