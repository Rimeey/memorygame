import { useState } from "react";

const useMoves = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handle_click_open() {
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    return { isOpen, setIsOpen, handle_click_open };
}

export default useMoves;