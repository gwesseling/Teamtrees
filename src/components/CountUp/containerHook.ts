import {useState, useEffect, useRef, useCallback} from "react";

const DELAY = 35;

/**
 * Handles count up animation
 */
export default function useCountUpAnimation(animation = false, val = 0) {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    /**
     * Set timeout for counter animation.
     */
    const setTimeoutCounter = useCallback(() => {
        let addon = val / 100;

        // check if addon is lower the rest value of val - current count
        if (val - countRef.current < addon) {
            // if not replace addon with the rest value
            addon = val - countRef.current;
        }

        // Add addon value to current count.
        const newCount = Math.round(countRef.current += addon);

        setCount(newCount);

        if (countRef.current < val) {
            setTimeout(setTimeoutCounter, DELAY);
        }
    }, [val]);

    useEffect(() => {
        if (val > 0 && animation) {
            setTimeout(setTimeoutCounter, DELAY);
        } else {
            setCount(val);
        }
    }, [animation, setTimeoutCounter, val]);

    return {
        count,
    };
}