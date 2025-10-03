import React, { useState } from "react";

function TimeSetter({ onSetTime }) {
    const [input, setInput] = useState("");

    const handleSet = () => {
        const seconds = parseInt(input, 10);
        if (!isNaN(seconds) && seconds > 0) {
            onSetTime(seconds); 
            setInput("");
        }
    };

    return (
        <div className="time-setter">
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Seconds"
            />
            <button onClick={handleSet}>Установить время</button>
        </div>
    );
}

export default TimeSetter;
