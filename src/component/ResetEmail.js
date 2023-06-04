import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResetEmail = () => {
    const navigate = useNavigate();

    return (
        <div className="w-50 mt-5 mx-auto">
            <h3 className="mt-5">パスワードのリセット</h3>
            <div className="row my-5">
                <div className="form-group d-flex align-items-center">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="メールを入力してください"
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="button-group d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-primary mx-5"
                        onClick={() => navigate("/login")}
                    >
                        バック
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mx-5"
                        onClick={() => navigate("update")}
                    >
                        オッケー
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResetEmail