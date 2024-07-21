"use client";
import { motion } from "framer-motion";

export default function BookOpen(props) {
  const { item, onClick, initial, animate, exit, transition } = props;

  return (
    <motion.div className="w-full h-full pb-8 flex gap-2 relative"></motion.div>
  );
}
