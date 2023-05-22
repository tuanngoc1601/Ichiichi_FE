import React from 'react';
import Logo from '../assets/logo_app.png';

const UserHeader = () => {
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
                <div className="form-group col-5">
                    <input type="text" placeholder="コース検索" className="form-control" />
                </div>
                <div className="button-group d-flex justify-content-around col-2">
                    <button type="button" className="btn btn-secondary">検索</button>
                    <button type="button" className="btn btn-primary ms-5">復習</button>
                </div>
                <div className="d-flex align-items-center justify-content-around col-2">
                    <i className="fas fa-user fs-3"></i>
                    <span className="fs-5">Rin</span>
                    <span><i className="fas fa-sort-down fs-3"></i></span>
                </div>
            </div>
        </div>
    )
}

export default UserHeader