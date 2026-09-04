// ==========================================
// INDEXEDDB - DAY 40
// ==========================================

const DB_NAME = "PlatformDB";
const DB_VERSION = 1;
const STORE_NAME = "offline_proposals";

// ==========================================
// OPEN DATABASE
// ==========================================

function openDB() {

    return new Promise((resolve, reject) => {

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        // ==========================================
        // DATABASE UPGRADE
        // ==========================================

        request.onupgradeneeded = function (event) {

            const db = event.target.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {

                db.createObjectStore(STORE_NAME, {
                    keyPath: "id",
                    autoIncrement: true
                });

                console.log("📦 Object store created!");

            }

        };

        // ==========================================
        // DATABASE SUCCESS
        // ==========================================

        request.onsuccess = function (event) {

            console.log("✅ IndexedDB opened successfully!");

            resolve(event.target.result);

        };

        // ==========================================
        // DATABASE ERROR
        // ==========================================

        request.onerror = function (event) {

            console.error(
                "❌ IndexedDB error:",
                event.target.error
            );

            reject(event.target.error);

        };

    });

}

// ==========================================
// SAVE OFFLINE DATA
// ==========================================

export async function saveOfflineData(payload) {

    const db = await openDB();

    return new Promise((resolve, reject) => {

        const transaction =
            db.transaction(STORE_NAME, "readwrite");

        const store =
            transaction.objectStore(STORE_NAME);

        const request =
            store.add(payload);

        request.onsuccess = function () {

            console.log(
                "💾 Data saved offline!",
                payload
            );

            resolve(request.result);

        };

        request.onerror = function (event) {

            console.error(
                "❌ Failed to save offline data:",
                event.target.error
            );

            reject(event.target.error);

        };

    });

}

// ==========================================
// GET OFFLINE DATA - BONUS
// ==========================================

export async function getOfflineData() {

    const db = await openDB();

    return new Promise((resolve, reject) => {

        const transaction =
            db.transaction(STORE_NAME, "readonly");

        const store =
            transaction.objectStore(STORE_NAME);

        const request =
            store.getAll();

        request.onsuccess = function () {

            console.log(
                "📦 Offline data retrieved:",
                request.result
            );

            resolve(request.result);

        };

        request.onerror = function (event) {

            console.error(
                "❌ Failed to retrieve offline data:",
                event.target.error
            );

            reject(event.target.error);

        };

    });

}