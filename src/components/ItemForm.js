import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event){
    event.preventDefault();
  

  const newItem = {
    id: uuid(), 
    name: itemName,
    category: itemCategory,
  };

  onItemFormSubmit(newItem);
  setItemName("");
  setItemCategory("Produce");
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => setItemName(event.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={(event)=>setItemCategory(event.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
