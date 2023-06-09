import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHomePage from './page/user/UserHomePage';
import UpdatePassword from './page/UpdatePassword';
import Login from './page/Login';
import SignUp from './page/SignUp';
import ResetPassword from './page/ResetPassword';
import CourseContent from './page/user/CourseContent';
import ContentDetailCourse from './page/user/ContentDetailCourse';
import CourseTest from './page/user/CourseTest';
import TestResultPreview from './page/user/TestResultPreview';
import TestIncorrectQuestion from './page/user/TestIncorrectQuestion';
import TestRandomQuestion from './page/user/TestRandomQuestion';
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
                {/* <GuestHeader /> */}

                <Routes>
                    <Route exact path="/" element={<UserHomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route exact path="/reset-password" element={<ResetPassword />} />
                    <Route path="/reset-password/update" element={<UpdatePassword />} />
                    <Route exact path="/course/:id" element={<CourseContent />} />
                    <Route path="/course/:id/:wordId/content" element={<ContentDetailCourse />} />
                    <Route exact path="/course/:id/test" element={<CourseTest />} />
                    <Route path="/course/:id/test/preview" element={<TestResultPreview />} />
                    <Route path="/test-incorrect-question" element={<TestIncorrectQuestion />} />
                    <Route path="/test-random" element={<TestRandomQuestion />} />
                </Routes>

            </div>
        </div>
    );
}

export default App;
