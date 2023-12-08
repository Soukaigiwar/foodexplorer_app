/**
 * 
 * @param {number} prev
 * @param {number} qt
 * @returns Prevent value equal or under 0
 */
export const handleQuantity = (prev, qt) => {
    if (prev >= 1) {
        prev += qt;

        if (prev <= 0) {
            return 1;
        }

        return prev;
    }
};
