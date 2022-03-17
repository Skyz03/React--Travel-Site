import React from "react";
import Card from "./components/Card";
import data from "./data";

const App = () => {
  const cards = data.map((item) => {
    return item.title;
  });

  console.log(cards);
  return <Card key="" />;
};

export default App;
