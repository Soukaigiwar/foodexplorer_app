/**
 * 
 * @param {string} str 
 * @returns Normalized string without accent and lowered case eg.: "Sérgio" return: "sergio"
 */

export const handleString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};
