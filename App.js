import React from "react";
import ReactDOM from "react-dom/client";
/*const heading = React.createElement("h1", {id:"heading"}, "Hello World from Raksh");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent =React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"Heading 1"},"Heading 1"),
        React.createElement("h2",{id:"Heading 2"},"Heading 2"),
 ]),
 React.createElement("div",{id:"child2"},[
    React.createElement("h3",{id:"Heading 3"},"Heading 3"),
    React.createElement("h4",{id:"Heading 4"},"Heading 4"),
]),
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
//react Element

const heading=React.createElement("h1",{id:"Heading"},"namaste karunadu");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 