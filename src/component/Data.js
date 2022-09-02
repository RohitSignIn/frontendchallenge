import React, { useState } from "react";

const Data = () => {
  const [data, setData] = useState("");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    });

  const main = () => {
    return data.map((e) => {
      return e.name;
    });
  };

  console.log(main());
  return <div>Data</div>;
};

export default Data;
