import React, { useState } from "react";

function TimeSetter({ setSecondsLeft, reset }) {
    const [input, setInput] = useState("");

    const handleSet = () => {
        const seconds = parseInt(input, 10);
        if (!isNaN(seconds) && seconds > 0) {
            setSecondsLeft(seconds);
            reset();
        }
        setInput("");
    };

    return (
        <div className="time-setter">
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Seconds"
            />
            <button onClick={handleSet}>Set</button>
        </div>
    );
};

export default TimeSetter;
