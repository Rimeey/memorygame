import { useState } from "react";

const useTimer = () => {

    const [timer, setTimer] = useState(0);

    function clear_timer(seconds) {
        const sign = seconds < 0 ? "-" : "";
        return sign + new Date(Math.abs(seconds) * 1000).toISOString().substr(11, 8);
    };

    return { timer, setTimer, clear_timer }
}

export default useTimer
