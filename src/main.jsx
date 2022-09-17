import React from "react";
import ReactDOM from "react-dom/client";
import { CountApp } from "./CountApp";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import"./styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp title="Goku" subtitle={912}/>
        {/* <CountApp value={3}></CountApp> */}
    </React.StrictMode>
);