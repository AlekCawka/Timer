import { useState, useEffect, useRef, useCallback } from 'react';

function useTimer(initialSeconds = 60) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const timerIdRef = useRef(null);

    const startTimer = useCallback(() => {
        if (seconds <= 0 || isRunning) return;

        timerIdRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(timerIdRef.current);
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        setIsRunning(true);
    }, [seconds, isRunning]);


    const pauseTimer = useCallback(() => {
        clearInterval(timerIdRef.current);
        setIsRunning(false);
    }, []);


    const resetTimer = useCallback((newSeconds = initialSeconds) => {
        clearInterval(timerIdRef.current);
        setIsRunning(false);
        setSeconds(newSeconds);
    }, [initialSeconds]);

    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    return {
        seconds,
        isRunning,
        startTimer,
        pauseTimer,
        resetTimer,
        setSeconds
    };
}

export default useTimer;