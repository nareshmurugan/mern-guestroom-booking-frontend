import React, { useState } from 'react';

const Filter = () => {
  // State example
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as needed
  });

  // Function example
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  return (
    <div>
      <h1>Your React Component</h1>
      <label>
        <input
          type="checkbox"
          checked={checkboxValues.checkbox1}
          onChange={() => handleCheckboxChange('checkbox1')}
        />
        Deluxe
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxValues.checkbox2}
          onChange={() => handleCheckboxChange('checkbox2')}
        />
        Deluxe
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkboxValues.checkbox3}
          onChange={() => handleCheckboxChange('checkbox3')}
        />
        Deluxe
      </label>
      {/* Add more checkboxes as needed */}
    </div>
  );
};


export default Filter;