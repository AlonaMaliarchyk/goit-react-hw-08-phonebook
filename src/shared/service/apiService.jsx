import axios from "axios";
const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

const setToken = token => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}

export const registerSignUp = async (newUser) => {
    const { data } = await instance.post(`/users/signup`, newUser);
    setToken(data.token);
    return data;
};

export const logIn = async (user) => {
    const { data } = await instance.post(`users/login`, user);
    setToken(data.token);
    return data;
};

export const logOut = async () => {
    const { data } = await instance.post(`/users/logout`);
    setToken(); 
    return data;
};

export const getCurrentUser = async (token) => {
    setToken(token);
    const { data } = await instance.get(`/users/current`);
    return data;
};

export const getContacts = async () => {
    const { data } = await instance.get(`/contacts`);
    return data;
};

export const addContact = async newContact => {
    const { data } = await instance.post(`/contacts`, newContact);
    return data;
};

export const deleteContact = async (contactId) => {
    const { data } = await instance.delete(`/contacts/${contactId}`);
    return data;
};

export default instance;
