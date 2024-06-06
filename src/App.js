import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Cape Town" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Elelwani17"
              target="_blank"
              rel="noreferrer"
            >
              Lufuno Vele
            </a>
            ,{" "}
            <a
              href="https://github.com/Elelwani17/SheCodes-React-Weather-Search-Engine"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on GitHub.
          </p>
        </footer>
      </div>
    </div>
  );
}
