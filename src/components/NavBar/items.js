import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home",
        link: "/",
        icon: "home  icon",
        private: false,
    },

    {
        id: nanoid(),
        text: "Contacts",
        link: "/contacts",
        icon: "list  icon",
        private: true,
    },
];

export default items;
