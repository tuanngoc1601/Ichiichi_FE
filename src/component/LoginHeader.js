import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo_app.png';

const LoginHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="px-5 border border-1" style={{ height: '100px' }}>
            <div className="row d-flex align-items-center px-5">
                <div className="d-flex col-3 align-items-center justify-content-center">
                    <div
                        style={{
                            width: '50px',
                            backgroundImage: `url(${Logo})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: '100px'
                        }}>
                    </div>
                    <span className="fw-bold fs-5 ms-4">ベトナム簡単語</span>
                </div>
                <div className="button-group d-flex justify-content-end col-9">
                    <button 
                        type="button" 
                        className="btn btn-primary me-2"
                        onClick={() => navigate("/login")}
                    >
                        ログイン
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => navigate("/sign-up")}
                    >
                        登録
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader