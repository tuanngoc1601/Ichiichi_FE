import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const navigate = useNavigate();

    return (
        <div className="w-50 mt-5 mx-auto">
            <h3 className="mt-5">パスワードのリセット</h3>
            <form className="mt-4">
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label for="name" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>ユーザー名</label>
                        <input type="text" className="form-control" id="name" value="Ngoc" disabled/>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center ">
                        <label for="password" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>新しいパスワード</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label for="password" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>パスワード再度入力</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="row my-5">
                <div className="button-group d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn btn-primary me-4"
                        onClick={() => navigate("/reset-password")}
                    >
                        バック
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => navigate("/login")}
                    >
                        オッケー
                    </button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default UpdatePassword