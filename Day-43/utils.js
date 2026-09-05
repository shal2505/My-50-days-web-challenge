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

export async function fetchWithRetry(
    url,
    options = {},
    retries = 3,
    backoff = 500
) {

    if (!navigator.onLine) {
    throw new Error("No internet connection detected");
}

    for (let i = 0; i < retries; i++) {

        try {

            const response =
                await fetch(url, options);

            if (!response.ok) {

                throw new Error(
                    `Request failed: ${response.status}`
                );

            }

            return response;

        } catch (error) {

            if (i === retries - 1) {

                throw error;

            }

            console.log(
                `Request failed. Retrying in ${backoff}ms...`
            );

            await new Promise(
                resolve =>
                    setTimeout(resolve, backoff)
            );

            backoff *= 2;

        }

    }

}

// ==========================================
// DAY 35 - AUTHENTICATION
// ==========================================

export function getAuthHeaders() {

    const token =
        localStorage.getItem("auth_token");

    if (!token) {

        throw new Error(
            "Access Denied: No authentication token found."
        );

    }

    return {
        "Authorization": "Bearer " + token
    };
}