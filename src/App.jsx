import { useState } from 'react';
import useTimer from './hooks/useTimer';
import ProgressBar from './components/ProgressBar';
import TimeSetter from './components/TimeSetter';
import Controls from './components/Controls';
import './styles/App.css';

function App() {
    const [timerSeconds, setTimerSeconds] = useState(60);

    const { seconds, isRunning, startTimer, pauseTimer, resetTimer, initialSeconds } = useTimer(timerSeconds);

    const handleSetTime = (newSeconds) => {
        setTimerSeconds(newSeconds);
        resetTimer(newSeconds);
    };

    return (
        <div className="app-container">
            <h1>{seconds}</h1>

            <ProgressBar current={seconds} total={timerSeconds} />

            <TimeSetter onSetTime={handleSetTime} />

            <Controls
                start={startTimer}
                pause={pauseTimer}
                reset={() => resetTimer(timerSeconds || initialSeconds)}
                isRunning={isRunning}
                seconds={seconds}
                total={timerSeconds}
            />
        </div>
    );
}

export default App;
