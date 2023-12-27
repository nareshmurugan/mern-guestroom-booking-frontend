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




// Dropdown.js

// import React, { useState } from 'react';

// const Dropdown = ({ options, onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     onSelect(option);
//     closeDropdown();
//   };

//   const toggleDropdown = () => {
//     setIsOpen((prevIsOpen) => !prevIsOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle" onClick={toggleDropdown}>
//         {selectedOption ? selectedOption.label : 'Select an option'}
//       </button>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {options.map((option) => (
//             <li key={option.value} onClick={() => handleOptionClick(option)}>
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

export default Filter;