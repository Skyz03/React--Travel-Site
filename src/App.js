import React from "react";
import Card from "./components/Card";
import data from "./data";

const App = () => {
  // THIS IS FOR CONSTANT MAP
  const cards = data.map((item) => {
    return <Card key="" item={item} />;
  });

  // console.log(cards);

  return <div>{cards}</div>;
};

export default App;
