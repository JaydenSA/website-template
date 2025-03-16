"use client";

import Landing from "./_components/home/Landing";
import { useEffect } from "react";
import { initAccordions } from "flowbite";
import Features from "./_components/home/Features";

export default function Home() {
  useEffect(() => {
    initAccordions();
  });
  return (
    <main className="flex flex-col items-center justify-center gap-2 py-4 dark:bg-gray-800">
      <Landing />
      <Features />
    </main>
  );
}
