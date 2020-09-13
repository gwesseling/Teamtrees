import {useState, useEffect} from 'react';

/** 
 * Handle scroll state up by adding an event to the document.
 */
export default function useScrollUp() {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY > 50) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return {
        isActive
    }
}