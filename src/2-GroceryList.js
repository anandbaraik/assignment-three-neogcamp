// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.

import { useState } from "react";

export function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  const [boughtGroceries, setBoughtGroceries] = useState([]);
  const [grocery, setGrocery] = useState("");

  const boughtIt = (item) => {
    const list = groceryList.filter((grocery) => grocery !== item);
    setBoughtGroceries([...boughtGroceries, item]);
    setGroceryList(list);
  };

  const addGrocery = () => {
    setGroceryList([...groceryList, grocery]);
    setGrocery("");
  };

  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <h1> GroceryList </h1>
      <div>
        Add items :{" "}
        <input
          type="text"
          id="input"
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />{" "}
        <button disabled={!grocery} onClick={addGrocery}>
          Add
        </button>
      </div>
      {groceryList.length > 0 && (
        <div>
          <ul>
            {groceryList?.map((item, index) => (
              <li key={item}>
                <label>
                  <input type="checkbox" onChange={() => boughtIt(item)} />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {boughtGroceries.length > 0 && (
        <div>
          <h1>Completed List</h1>
          <ul>
            {boughtGroceries?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
