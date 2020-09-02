export function getToken() {
    return localStorage.getItem("token");
}

export function destroyToken() {
    localStorage.removeItem('token');
}

export function isAuthenticated() {
    return getToken();
}

export function logout() {
    destroyToken();
    window.location = "/";
}