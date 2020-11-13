import React, { useState } from "react";

const initColor = {
  color: "",
  code: {
    hex: "",
  },
  id: "",
};

const BubbleForm = (props) => {
  const [color, setColor] = useState(initColor);

  const handleChange = (e) => {
    if (e.target.name === "hex") {
      setColor({...color, code: { hex: e.target.value }});
    } else {
      setColor({ ...color, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postColor(color);
  };

  return (
    <div>
      <h1>New Bubble Form</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor='color'>
            Color Name:
            <input
              type='text'
              name='color'
              value={color.color}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='hex'>
            Hex Code:
            <input
              type='text'
              name='hex'
              value={color.code.hex}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
      </form>
    </div>
  );
};

export default BubbleForm;
