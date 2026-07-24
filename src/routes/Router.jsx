import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import Dashboard from '../features/Dashboard/Dashboard'
import Catalog from '../features/Catalog/Catalog'
import MyLearning from '../features/MyLearning/MyLearning'
import Mainlayout from '../common/layout/Mainlayout'
import Login from '../features/Auth/Login'
import Signup from '../features/Auth/Signup'
import Authlayout from '../common/layout/Authlayout'

export const ROUTES = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    CATALOG: '/catalog',
    MY_LEARNING: '/my-learning',
};


function AppRoute() {


    return (
        <Router>
            <Routes>
                <Route element={<Authlayout />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Route>
                <Route element={<Mainlayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/my-learning" element={<MyLearning />} />
                </Route>
            </Routes>
        </Router>
    )

}
export default AppRoute;