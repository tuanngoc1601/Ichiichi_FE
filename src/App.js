import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './component/UserHeader';
import LoginHeader from './component/LoginHeader';
import GuestHeader from './component/GuestHeader';
import UserHomePage from './page/user/UserHomePage';
import FormLogin from './component/FormLogin';
import FormSignUp from './component/FormSignUp';
import UpdatePassword from './component/UpdatePassword';
import Login from './page/Login';
import ResetPassword from './component/ResetPassword';
import CourseContentModal from './component/user/CourseContentModal';
import './App.css';

function App() {
    return (
        <div className="App">
            <div style={{
                backgroundColor: 'rgba(252, 237, 227, 0.3)',
                display: 'flex',
                position: 'relative',
                minHeight: '100vh',
                flexDirection: 'column'
            }}>
                {/* <UserHeader /> */}
                {/* <LoginHeader /> */}
                <GuestHeader />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<UserHomePage />} />
                        <Route path="/login" element={<FormLogin />} />
                        <Route path="/sign-up" element={<FormSignUp />} />
                        <Route exact path="/reset-password" element={<ResetPassword />} />
                        <Route path="/reset-password/update" element={<UpdatePassword />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
