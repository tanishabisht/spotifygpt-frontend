import React, { useState } from 'react';

const CustomSelect = (props) => {
    const { value, onChange, options } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option)
        setIsOpen(false);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="customSelect_container">
            <div className="select_container" onClick={toggleDropdown}>
                <div className="selected_option">{value}</div>
                <div className="arrow">&#9660;</div>
            </div>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
