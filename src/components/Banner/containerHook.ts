import trees from '../../assets/trees.json';

export default function useBanner() {

    function getTrees() {
        const year = new Date().getFullYear();
        return trees.filter((t) => t.year <= year).map((t) => t.trees).reduce((result, value) => result + value);
    }

    return {
        getTrees,
    }
}