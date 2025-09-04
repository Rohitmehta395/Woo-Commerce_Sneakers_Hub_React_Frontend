import React from "react";
import "./Category.css";
import Input from "../../Components/Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" defaultChecked='true' />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals" // Fixed: was "sandles"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels" // Fixed: was "heals"
            title="Heels"
            name="test"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
