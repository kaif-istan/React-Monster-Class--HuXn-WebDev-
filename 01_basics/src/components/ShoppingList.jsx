import React, { useState } from "react";

const ShoppingList = () => {
  const [shoplist, setShopList] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  // handle name change function
  const handleNameChange = (e) => {
    // console.log(e.target.value)
    setItemName(e.target.value);
  };

  // handle quantity change function
  const handleQuantityChange = (e) => {
    // console.log(e.target.value)
    setQuantity(parseInt(e.target.value));
  };

  // handle submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (itemName && quantity) {
      const updatedList = [...shoplist, { name: itemName, quantity: quantity }];
      setShopList(updatedList);
      console.log(updatedList);
      setItemName("");
      setQuantity("");
    }
  };
  return (
    <div>
      <h1>Add shopping list items</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={itemName}
          placeholder="Item Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Item Quantity"
          onChange={handleQuantityChange}
        />
        <button type="submit">Add Item</button>
      </form>

      {shoplist.map((obj, ind) => (
        <ul key={ind}>
          <li>Item: {obj.name}</li>
          <li>Quantity: {obj.quantity}</li>
        </ul>
      ))}
    </div>
  );
};

export default ShoppingList;
