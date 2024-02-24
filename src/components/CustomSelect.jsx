import React, { useState } from 'react';

const CustomSelect = (props) => {
    const { options } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="customSelect_container">
            <div className="select_container" onClick={toggleDropdown}>
                <div className="selected_option">{selectedOption}</div>
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
