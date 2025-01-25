import React from 'react';
import './global.css';
import Card from './components/Card.tsx';
import GameOfLife from './components/GameOfLife.tsx';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GameOfLife/>
      <div className="relative z-10 text-center p-16">
        <div className="font-bold">
          <div className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent
       bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent">
            Hello,
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl py-16 bg-gradient-to-b from-white to-[rgb(100,100,100)] bg-clip-text text-transparent
       bg-gradient-to-b from-white to-[rgb(100,100,100)] bg-clip-text text-transparent">
            my name is Hal Hoffmeyer.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[50%] text-left">
              I am a computer science student at the University of Michigan, with a focus on front-end development.
              I am proficient in C/C++, Python, Java, JavaScript, TypeScript, HTML, and CSS.
              I also have experience with React and am currently learning Next.js.
              <br></br><br></br>
              Feel free to explore my projects below.
              The source code for these and other projects is available on my <a className="relative group" href="https://github.com/halhoff">GitHub<span className="absolute inset-x-0 bottom-0 h-[2px] bg-[rgba(89,186,255,0.5)] group-hover:h-[100%] transition-all duration-300 ease-[cubic-bezier(0,0.8,0.13,1)]"></span>
</a>.

          </div>
          <div className="mt-16 text-left p-2">
          <div className="text-4xl text-center font-bold p-4 bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent bg-gradient-to-b from-white to-[rgb(130,130,130)] bg-clip-text text-transparent">Projects</div>
            <div className="flex flex-col md:flex-row my-4 items-stretch">
              <Card
                title="Calculator"
                content="Simplifies expressions and graphs simple functions. Inspired by Desmos and WolframAlpha."
                icon="calculate"
                to="/graphing-calculator/"
              />
              <Card
                title="Snake"
                content="Snake game built in JavaScript. Supports custom apple counts. Inspired by Google Snake."
                icon="sports_esports"
                to="/snake-game/"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <Card
                title="Minesweeper"
                content="Minesweeper game built in React. Three difficulties to choose from."
                icon="search"
                to="/minesweeper-react/"
              />
              <Card
                title="LaTeX Generator"
                content="Because writing latex for matrices is annoying. Features dynamic matrix creation, real-time code generation, and augmented matrices."
                icon="data_array"
                to="/latex-generator/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}