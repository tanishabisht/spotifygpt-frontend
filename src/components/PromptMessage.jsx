import React from 'react';

const PromptMessage = ({ children, onClick, clickable = true }) => {
    return (
        <>
            {clickable && <div className="promtMessage_container" onClick={() => onClick(children)}>
                {children}
            </div>}

            {!clickable && <div className="promtMessageNot_container">
                {children}
            </div>}
        </>

    );
};

export default PromptMessage;
