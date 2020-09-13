/** 
 * Add commas between a number.
 */
export function toStringWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
} 