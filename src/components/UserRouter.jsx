import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import ContactsPage from "./Page/ContactsPage/ContactsPage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import LoginPage from "./Page/LoginPage/LoginPage";
const UserRouter = () => {
    return (
        <Routes>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path='/contacts' element={<ContactsPage/> } /> 
        </Routes>
    )
}
export default UserRouter;