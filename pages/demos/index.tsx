import React from "react";
import { DemoCard } from "../../components/DemoCard";

export type Demo = {
  title: string;
  description: string;
  url: string;
};

export const demoList: Demo[] = [
  {
    title: "Rock Paper Scissors",
    description: "A simple game of Rock Paper Scissors",
    url: "/demos/rockPaperScissors",
  },
  {
    title: "Color Picker Game",
    description: "A game to guess colors based on their RGB values",
    url: "/demos/colorPickerGame",
  },
  {
    title: "Fizz Buzz",
    description: "Simple Fizz-Buzz... the obvious programming question",
    url: "/demos/fizzBuzz",
  },
  {
    title: "Odious numbers",
    description:
      " An 'odious number' is a non-negative number that has an odd number of 1s in its binary expansion.",
    url: "/demos/isOdious",
  },
  {
    title: "Factorial Zeros",
    description:
      "How many zeros does the factorial of a number have? This is a simple algorithm to find out.",
    url: "/demos/factorialZeros",
  },
  {
    title: "Student Projects",
    description: "Here are some of the projects my students have created. ",
    url: "/demos/studentProjects",
  },
  {
    title: "JSON Depth Calculator",
    description:
      "This is a simple algorithm to calculate the depth of a JSON object",
    url: "/demos/jsonDepth",
  },
];

export default function Demos() {
  return (
    <div className="flex flex-col sm:p-10 items-center justify-center">
      <h1 className="text-4xl text-base-content m-10">
        Some interesting code demos
      </h1>
      <h2 className="text-2xl text-base-content m-10">
        This is a small collection of interesting little side projects and code
        ideas I have created. I hope you enjoy them!
      </h2>
      <div className="shadow-lg w-full py-8 sm:p-14 sm:rounded-md flex flex-col items-center sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-br from-green-200 via-green-400 to-blue-500 ">
        {demoList.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  );
}
