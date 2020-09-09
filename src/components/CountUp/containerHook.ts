import {useState, useEffect, useRef} from "react";

const DELAY = 35;

// TODO: make is ease more (slow down at the end)
/**
 * Handles count up animation
 */
export default function useCountUpAnimation(animation = false, val = 0, deci: number) {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    let timeout;

    /**
     * Set timeout for counter animation.
     */
    const setTimeoutCounter = () => {
        // TODO: rename variables
        let addon = val / 100;

        // check if addon is lower the rest value of val - current count
        if (val - countRef.current < addon) {
            // if not replace addon with the rest value
            addon = val - countRef.current;
        }

        // Add addon value to current count.
        const newCount = (countRef.current += addon);
        // Calculate value for rounding on (multiple) digits
        const round = Math.pow(10, deci);
        // Round number to solid number or a number with (mulitple) digits
        const c = Number.isInteger(val) ? Math.trunc(newCount) : Math.floor(newCount * round) / round;

        setCount(c);

        if (countRef.current < val) {
            timeout = setTimeout(setTimeoutCounter, DELAY);
        }
    };

    useEffect(() => {
        if (val > 0 && animation) {
            timeout = setTimeout(setTimeoutCounter, DELAY);
        } else {
            setCount(val);
        }
    }, [animation, val]);

    return {
        count,
    };
}