/**
 * 
 * @param {string} str 
 * @returns Normalized string without accent and lowered case eg.: "Sérgio" return: "sergio"
 */

export const handleString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

/**
 * 
 * @param {string} str 
 * @returns Formated Number with 2 decimals and comma as separator.
 */
export const handleZeros = (str) => {
    const formatedNumber = str.toFixed(2).toString().replace(".", ",");

    return formatedNumber;
}