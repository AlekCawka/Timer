import { useState } from 'react';
import useTimer from './hooks/useTimer';
import ProgressBar from './components/ProgressBar';

function App() {
    const [inputValue, setInputValue] = useState(60);
    const { seconds, isRunning, startTimer, pauseTimer, resetTimer } = useTimer(inputValue);

    const handleSetTime = () => {
        resetTimer(inputValue);
    };

    return (
        <div>
            <h1>{seconds}</h1>

        <ProgressBar current={seconds} total={60} />

            <div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={e => setInputValue(Number(e.target.value))}
                />
                <button onClick={handleSetTime}>Установить время</button>
            </div>

            <div>
                <button onClick={startTimer} disabled={isRunning || seconds === 0}>
                    {seconds === inputValue ? 'Старт' : 'Продолжить'}
                </button>
                <button onClick={pauseTimer} disabled={!isRunning}>Пауза</button>
                <button onClick={() => resetTimer()}>Сбросить</button>
            </div>
        </div>
    );
}

export default App;

