export const newConn = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("wordApp", 1);
        request.onsuccess = () => {
            resolve(request);
        };
        request.onerror = (err) => {
            reject(err);
        };
    });
};
