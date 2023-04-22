import React, {useState} from "react";
import Item from "./Item";


function Filter({ onCategoryChange, items, onSearchChange }) {
  const [searchText, setSearchText] = useState('');

  const filteredItems = items.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="Filter">
      <input type="text" value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);
        onSearchChange(e.target.value);
      }} placeholder="Search Item....."/>
      <ul>
        {filteredItems.map((item)=>(
          <Item item={item} />
        ))}
      </ul>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
