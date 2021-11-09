import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ClassList from "./ClassList/";
import { getClassesFromAPI } from "../../services/user";

export default function ClassDashBoard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function handleItemChange(data) {
      setItems(data);
    }

    getItems(handleItemChange);
    return () => removeItems(handleItemChange);
  }, []);

  return (
    <div>
      <NavBar handleAddClass={(item) => setItems([...items, item])} />
      <ClassList classes={items} />
    </div>
  );
}

function getItems(handler) {
  getClassesFromAPI().then((res) => {
    handler(res.data.payload);
  });
}

function removeItems(handler) {
  handler(undefined);
}
