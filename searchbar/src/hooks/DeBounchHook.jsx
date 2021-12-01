import React, { useState } from 'react';

export const useDebounch = (value, timeout, callback) => {
    const [timer, setTimer] = useState(null)
    const clearTimer = () => {
        if (timer)
            clearTimeout(timer)
    }
    React.useEffect(() => {
        clearTimer()
        if (value && callback) {
            const newTimer = setTimeout(callback, timeout)
            setTimer(newTimer)
        }
    }, [value])
}