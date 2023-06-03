import React from 'react';
import Logo from '../assets/logo_app.png';

const ContentHeader = () => {
    return (
        <div className="px-5 border border-1" style={{ height: '100px' }}>
            <div className="row d-flex align-items-center px-5">
                <div className="d-flex col-3 align-items-center justify-content-start">
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
                <div className="d-flex align-items-center justify-content-end col-9">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle mx-3"
                        style={{ width: '40px' }}
                        alt="Avatar"
                    />
                    <span className="fs-5 mx-3">Rin</span>
                    <span><i className="fas fa-sort-down fs-3 mx-3"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader