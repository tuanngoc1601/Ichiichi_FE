import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './component/UserHeader';
import LoginHeader from './component/LoginHeader';
import GuestHeader from './component/GuestHeader';
import ContentHeader from './component/ContentHeader';
import UserHomePage from './page/user/UserHomePage';
import FormLogin from './component/FormLogin';
import FormSignUp from './component/FormSignUp';
import UpdatePassword from './component/UpdatePassword';
import Login from './page/Login';
import ResetPassword from './component/ResetPassword';
import CourseContent from './page/user/CourseContent';
import ContentDetailCourse from './page/user/ContentDetailCourse';
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
                {/* <GuestHeader /> */}
                <ContentHeader />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<UserHomePage />} />
                        <Route path="/login" element={<FormLogin />} />
                        <Route path="/sign-up" element={<FormSignUp />} />
                        <Route exact path="/reset-password" element={<ResetPassword />} />
                        <Route path="/reset-password/update" element={<UpdatePassword />} />
                        <Route exact path="/course/:id" element={<CourseContent />} />
                        <Route path="/course/:id/:wordId/content" element={<ContentDetailCourse />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
