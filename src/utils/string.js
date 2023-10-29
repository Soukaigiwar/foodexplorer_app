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
 * @returns eg.: 12.9 return: 12,90 | 5 return: 5,00 | 1.99 return: 1,99
 */
export const handleZeros = (str) => {
    const formatedNumber = str.toFixed(2).toString().replace(".", ",");

    return formatedNumber;
}