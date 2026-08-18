// ==========================================
// API MODULE - DAY 32
// ==========================================

// ==========================================
// DAY 29 - POST REQUEST
// ==========================================

export async function submitInitiative(newInitiative) {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
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

    return await response.json();
}


// ==========================================
// DAY 30 - PUT REQUEST
// ==========================================

export async function updateInitiative(id, updatedInitiative) {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + id,
        {
            method: "PUT",

            headers: {
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

    return await response.json();
}


// ==========================================
// DAY 30 - DELETE REQUEST
// ==========================================

export async function deleteInitiative(id) {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + id,
        {
            method: "DELETE"
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

    const response = await fetch(
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

    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}`
    );

    if (!response.ok) {
        throw new Error("GitHub user not found.");
    }

    return await response.json();
}


// ==========================================
// DAY 28 - GITHUB REPOSITORIES
// ==========================================

export async function fetchGithubRepositories(username) {

    const response = await fetch(
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