import * as types from "./types";

export const setUser = (user) => ({
    type: types.SET_USER,
    state: user,
});

export const setAuth = (auth) => ({
    type: types.SET_AUTH,
    state: auth,
});