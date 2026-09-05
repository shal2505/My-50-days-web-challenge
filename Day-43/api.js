import {
    fetchWithRetry,
    getAuthHeaders
} from "./utils.js";

import { saveOfflineData } from "./db.js";

const userCache = new Map();

// ==========================================
// API MODULE - DAY 32
// ==========================================

// ==========================================
// DAY 29 + DAY 40 - POST REQUEST
// ==========================================

export async function submitInitiative(newInitiative) {

    // ==========================================
    // DAY 40 - OFFLINE CHECK
    // ==========================================

    if (!navigator.onLine) {

        console.log("📴 You are offline.");
        console.log("💾 Saving initiative locally...");

        await saveOfflineData(newInitiative);

        alert(
            "You are offline. Your initiative has been saved locally and will be synced when you are back online."
        );

        return {
            offline: true,
            data: newInitiative
        };
    }


    // ==========================================
    // ONLINE - SEND TO SERVER
    // ==========================================

    const response = await fetchWithRetry(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                ...getAuthHeaders(),
                "Content-type":
                    "application/json; charset=UTF-8"
            },

            body: JSON.stringify(newInitiative)
        }
    );


    if (!response.ok) {

        throw new Error(
            `Request failed: ${response.status}`
        );

    }


    const data = await response.json();


    return {
        response,
        data
    };
}

// ==========================================
// DAY 30 - PUT REQUEST
// ==========================================

export async function updateInitiative(id, updatedInitiative) {

    const response = await fetchWithRetry(
        "https://jsonplaceholder.typicode.com/posts/" + id,
        {
            method: "PUT",

            headers: {
                ...getAuthHeaders(),
                "Content-type":
                    "application/json; charset=UTF-8"
            },

            body: JSON.stringify(updatedInitiative)
        }
    );

    if (!response.ok) {
        throw new Error(
            `Update request failed: ${response.status}`
        );
    }

    const data = await response.json();

return {
    response,
    data
};
}


// ==========================================
// DAY 30 - DELETE REQUEST
// ==========================================

export async function deleteInitiative(id) {

    const response =  await fetchWithRetry(
        "https://jsonplaceholder.typicode.com/posts/" + id,
        {
            method: "DELETE",

            headers: {
            ...getAuthHeaders()
        }

        }
    );

    if (!response.ok) {
        throw new Error(
            `Delete request failed: ${response.status}`
        );
    }

    return true;
}


// ==========================================
// DAY 31 - INFINITE SCROLL
// ==========================================

export async function fetchNextPage(currentPage, limit) {

    const response = await fetchWithRetry(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`
    );

    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status}`
        );
    }

    return await response.json();
}


// ==========================================
// DAY 28 - GITHUB USER
// ==========================================

export async function fetchGithubUser(username) {

   if (userCache.has(username)) {

    const cached = userCache.get(username);

    const cacheAge =
        Date.now() - cached.timestamp;

    // Cache is valid for 5 minutes
    if (cacheAge < 5 * 60 * 1000) {

        console.log("Serving from cache!");

        return cached.data;
    }

    // Cache expired
    console.log("Cache expired. Fetching fresh data...");

    userCache.delete(username);
}

    const response = await fetchWithRetry(
        `https://api.github.com/users/${encodeURIComponent(username)}`
    );

    if (!response.ok) {
        throw new Error("GitHub user not found.");
    }

    const data = await response.json();

    userCache.set(username, {
    data: data,
    timestamp: Date.now()
});

    console.log("Fetched from GitHub and saved to cache!");

    return data;
}

// ==========================================
// DAY 28 - GITHUB REPOSITORIES
// ==========================================

export async function fetchGithubRepositories(username) {

    const response = await fetchWithRetry(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
        throw new Error(
            `GitHub API error: ${response.status}`
        );
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error(
            "GitHub did not return a repository list."
        );
    }

    return data;
}

export async function secureDeleteResource(targetId) {

    const response = await fetchWithRetry(
        "https://jsonplaceholder.typicode.com/posts/" + targetId,
        {
            method: "DELETE",

            headers: {
                ...getAuthHeaders()
            }
        }
    );

    if (response.status === 401) {
        throw new Error(
            "Unauthorized: Session expired"
        );
    }

    if (!response.ok) {
        throw new Error(
            `Delete request failed: ${response.status}`
        );
    }

    return true;
}

// ==========================================
// DAY 37 - PARALLEL NETWORK ARCHITECTURE
// ==========================================

export async function fetchDashboardData(username) {

    const profileUrl =
        `https://api.github.com/users/${encodeURIComponent(username)}`;

    const reposUrl =
        `https://api.github.com/users/${encodeURIComponent(username)}/repos`;

    const followersUrl =
        `https://api.github.com/users/${encodeURIComponent(username)}/followers`;



    // ==========================================
    // CREATE ALL REQUESTS IN PARALLEL
    // ==========================================

    const profilePromise =
        fetchWithRetry(profileUrl);

    const reposPromise =
        fetchWithRetry(reposUrl);

    const followersPromise =
        fetchWithRetry(followersUrl);



    // ==========================================
    // BONUS - WAIT FOR EVERYTHING
    // ==========================================

    const results =
        await Promise.allSettled([
            profilePromise,
            reposPromise,
            followersPromise
        ]);

    console.log(
        "Dashboard request results:",
        results
    );



    // ==========================================
    // EXTRACT SUCCESSFUL RESPONSES
    // ==========================================

    const profileResponse =
        results[0].status === "fulfilled"
            ? results[0].value
            : null;

    const reposResponse =
        results[1].status === "fulfilled"
            ? results[1].value
            : null;

    const followersResponse =
        results[2].status === "fulfilled"
            ? results[2].value
            : null;



    // ==========================================
    // PARSE SUCCESSFUL RESPONSES
    // ==========================================

    const profile =
        profileResponse
            ? await profileResponse.json()
            : null;

    const repos =
        reposResponse
            ? await reposResponse.json()
            : [];

    const followers =
        followersResponse
            ? await followersResponse.json()
            : [];



    // ==========================================
    // RETURN UNIFIED DASHBOARD DATA
    // ==========================================

    return {
        profile: profile,
        repos: repos,
        followers: followers
    };

}

