import { useEffect } from "react";

const useAutosizeTextArea = (textAreaRef, value) => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight - 30;
            console.log(scrollHeight)
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
