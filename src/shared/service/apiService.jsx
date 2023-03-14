import axios from "axios";
const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

export const registerSingUp = async () => {
    const { data } = await instance.post(`/users/signup`);
     console.log("registerSinUp", data);
    return data;
};

export const logIn = async () => {
    const { data } = await instance.post(`users/login`);
     console.log("dataLogin", data);
    return data;
};

export const logOut = async () => {
    const { data } = await instance.post(`/users/logout`);
     console.log("dataLogout", data);
    return data;
};

export const getCurrentContacts = async () => {
    const { data } = await instance.get(`/users/current`);
     console.log("dataGetCurrentContact", data);
    return data;
};

export const getContacts = async () => {
    const { data } = await instance.get(`/contacts`);
     console.log("dataGetContact", data);
    return data;
};

export const addContact = async () => {
    const { data } = await instance.post(`/contacts`);
     console.log("dataAddContact", data);
    return data;
};

export const deleteContact = async (contactId) => {
    const { data } = await instance.delete(`/contacts/${contactId}`);
    console.log("dataDelete", data);
    return data;
};