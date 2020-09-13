import trees from '_ASSETS/trees.json';

/** 
 * Handles banner data.
 */
export default function useBanner() {

    /** 
     * Get trees from project data.
     */
    function getTrees() {
        const year = new Date().getFullYear();
        return trees.filter((t) => t.year <= year).map((t) => t.trees).reduce((result, value) => result + value);
    }

    return {
        getTrees,
    }
}