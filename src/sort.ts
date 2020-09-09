// @ts-nocheck

// TODO: fix typescript
/** 
 * Sort array in multiple arrays based on an attribute
 */
export function sortByAttribute(values, attribute: string) {
    let arrays = {};

    values.forEach((value) => {
        const id = String(value[attribute]);
        
        if (!Object.keys(arrays).includes(id)) {
            arrays = {...arrays, [id]: []};
        }   
        
        arrays[id].push(value);
    }); 

    return arrays;
}