import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite javascript framework",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue ",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}

      {/* <Search /> */}

      {/* <button
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        Toggle DropDown
      </button>
      {showDropDown ? (
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
        {/* Accordion is the children */}
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
        >
          Toggle DropDown
        </button>
        {showDropDown ? (
          <Dropdown
            label="Select a color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
