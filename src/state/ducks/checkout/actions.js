import * as types from "./types";


export const setRandom = (value) => ({
    type: types.SET_RANDOM,
    state: value,
});

export const canCheckout = (status) => ({
    type: types.SET_CHECKOUT_PERMISSION,
    state: status,
});

// ----------------------------------------------------------------------------

export const setName = (value) => ({
    type: types.SET_NAME,
    state: value,
});

export const setEmail = (value) => ({
    type: types.SET_EMAIL,
    state: value,
});

export const setCity = (value) => ({
    type: types.SET_CITY,
    state: value,
});

export const setPhonenumber = (value) => ({
    type: types.SET_PHONENUMBER,
    state: value,
});

export const setProduct = (value) => ({
    type: types.SET_PRODUCT,
    state: value,
});


// aliasing
export const changeRandom = setRandom;
export const changeName = setName;
export const changeEmail = setEmail;
export const changeCity = setCity;
export const changePhonenumber = setPhonenumber;
export const changeProduct = setProduct;
