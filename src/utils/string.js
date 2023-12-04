/**
 * 
 * @param {string} str 
 * @returns {string} Normalized string without accent and lowered case eg.: "Sérgio" return: "sergio"
 */

export const handleString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

/**
 * 
 * @param {string} str
 * @returns {decimal} Formated Number with 2 decimals and comma as separator.
 * @returns eg.: 12.9 return: 12,90 | 5 return: 5,00 | 1.99 return: 1,99
 */
export const handleZeros = (str) => {
    if (typeof str !== 'number') {
        str = parseFloat(str);
    };
    
    const formatedNumber = str.toFixed(2).toString().replace(".", ",");

    return formatedNumber;
};

// /**
//  * 
//  * @param {array} items 
//  * @returns {string} A string where each id and quantity are separated by a space.
//  */

// export const cartToString = (items) => {
    
//     if (items) {
//         let result = "";
//         for (let i = 0; i < items.length; i++) {
//             for (let key in items[i]) {
//                 result += items[i][key] + ' ';
//             };
//         };
        
//         return result.trim();
//     };

//     return "";
// };
