import React from "react";

function Controls({ start, pause, reset, isRunning, seconds, total }) {
    return (
        <div className="controls">
            <button onClick={start} disabled={isRunning || seconds === 0}>
                {seconds === total ? 'Старт' : 'Продолжить'}
            </button>
            <button onClick={pause} disabled={!isRunning}>Пауза</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
}

export default Controls;
