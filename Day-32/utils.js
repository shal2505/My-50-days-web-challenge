// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export function debounce(func, delay) {

    let timeout;

    return function (...args) {

        clearTimeout(timeout);

        timeout = setTimeout(function () {

            func.apply(this, args);

        }, delay);

    };

}