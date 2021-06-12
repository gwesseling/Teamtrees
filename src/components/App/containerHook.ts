import useFetch from 'use-http';

export type ProjectType = {
    title: string;
    subtitle: string; 
    description: string; 
    trees: number; 
    continent: string; 
    completed: boolean;
}

/** 
 * Fetch app data
 */
export default function useApp() {
    const {loading, error, data = []} = useFetch<Array<ProjectType>>('https://api.gwesseling.nl/trees', {}, []);

    return {
        data,
        loading,
        error,
    }

}