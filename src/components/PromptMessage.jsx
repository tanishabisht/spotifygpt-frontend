import React from 'react';

const PromptMessage = ({ children, onClick }) => {
    return (
        <div className="promtMessage_container" onClick={() => onClick(children)}>
            {children}
        </div>
    );
};

export default PromptMessage;
