import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(()=> import( "./Page/HomePage/HomePage"));
const ContactsPage = lazy(()=> import( "./Page/ContactsPage/ContactsPage"));
const RegisterPage = lazy(()=> import( "./Page/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./Page/LoginPage/LoginPage"));
const PrivateRoute = lazy(() => import("../components/PrivateRoute/PrivateRoute"));
const PublicRoute = lazy(() => import("../components/PublicRoute/PublicRout"));
const NotFoundPage  = lazy(() => import('./Page/NotFoundPage/NotFoundPage'));

const UserRouter = () => {

    return (
    <Suspense fallback={<p>...loading</p>}>
        <Routes>
            <Route index element={<HomePage />} />
                <Route element={<PublicRoute/>}>
                    <Route path='/register' element={<RegisterPage />} /> 
                    <Route path="/login" element={<LoginPage />} /> 
                    <Route path='*' element={<NotFoundPage/> } />
                </Route> 
                <Route element={<PrivateRoute/>}>
                   <Route path='/contacts' element={<ContactsPage />} /> 
                </Route>
        </Routes>
    </Suspense>
    )
}
export default UserRouter;