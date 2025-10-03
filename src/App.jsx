import { useState } from 'react';
import useTimer from './hooks/useTimer';
import ProgressBar from './components/ProgressBar';
import TimeSetter from './components/TimeSetter';
import Controls from './components/Controls';

function App() {
    const [inputValue, setInputValue] = useState(60);
    const { seconds, isRunning, startTimer, pauseTimer, resetTimer } = useTimer(inputValue);

    const handleSetTime = () => {
        resetTimer(inputValue);
    };

    return (
        <div>
            <h1>{seconds}</h1>

            <ProgressBar current={seconds} total={inputValue} />

            <div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={e => setInputValue(Number(e.target.value))}
                />
                <button onClick={handleSetTime}>Установить время</button>
            </div>

            <Controls
                start={startTimer}
                pause={pauseTimer}
                reset={() => resetTimer(inputValue || initialSeconds)}
                isRunning={isRunning}
                seconds={seconds}
                total={inputValue}
            />
        </div>
    );
}

export default App;



//  return (
//     <div className="app-container">
//       <h1>React Timer</h1>
//       <Timer seconds={secondsLeft} />
//       <ProgressBar secondsLeft={secondsLeft} totalSeconds={initialSeconds} />
//       <Controls start={start} pause={pause} reset={reset} isRunning={isRunning} />
//       <TimeSetter setSecondsLeft={setSecondsLeft} reset={reset} />
//     </div>
//   );